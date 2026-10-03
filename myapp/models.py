from django.db import models
from django.contrib.auth.models import User

class QuizResult(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE ,default=1) # for task view only particular user
    score = models.PositiveIntegerField()
    total = models.PositiveIntegerField()
    duration = models.DurationField(null=True, blank=True)  # ⏱️ stopwatch time
    completed_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.user.username if self.user else 'Guest'}: {self.score}/{self.total}"