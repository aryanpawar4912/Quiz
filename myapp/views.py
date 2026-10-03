from django.shortcuts import render, redirect
from django.contrib import messages
from django.contrib.auth import login, logout
from django.contrib.auth.decorators import login_required
from datetime import timedelta
from django.utils.timezone import now
from .models import QuizResult
from .forms import LoginForm, SignupForm

def Home(request):
    return render(request, 'home.html')

def Quiz(request):
    return render(request, 'quiz.html')

def Result(request):
    score = int(request.GET.get('score', 0))
    total = int(request.GET.get('total', 0))
    time_seconds = int(request.GET.get('time', 0))
    duration = timedelta(seconds=time_seconds)

    if request.user.is_authenticated:
        QuizResult.objects.create(
            user=request.user,
            score=score,
            total=total,
            duration=duration
        )

    return render(request, 'result.html', {
        'score': score,
        'total': total,
        'duration': duration
    })

@login_required
def History(request):
    results = QuizResult.objects.filter(user=request.user).order_by('-completed_at')
    return render(request, 'history.html', {'results': results})

def Login(request):
    if request.method == 'POST':
        form = LoginForm(request=request, data=request.POST)
        if form.is_valid():
            user = form.get_user()
            login(request, user)
            return redirect('home')
        else:
            for field, errors in form.errors.items():
                for error in errors:
                    messages.error(request, f"{field}: {error}")
    else:
        form = LoginForm()
    return render(request, 'login.html', {'form': form})

def Signup(request):
    if request.method == 'POST':
        form = SignupForm(request.POST)
        if form.is_valid():
            user = form.save()
            login(request, user)
            messages.success(request, "Signup successful! Welcome aboard.")
            return redirect('home')
    else:
        form = SignupForm()
    return render(request, 'signup.html', {'form': form})

def Logout(request):
    logout(request)
    messages.info(request, "Logged out successfully.")
    return redirect('login')