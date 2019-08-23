# -*- coding: utf-8 -*-
# Generated by Django 1.11.23 on 2019-08-23 17:33
from __future__ import unicode_literals

from django.db import migrations, models
import jsonfield.fields


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Action',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('ipAddress', models.CharField(max_length=50)),
                ('time', models.DateTimeField(auto_now=True)),
                ('data', jsonfield.fields.JSONField(default=dict)),
            ],
        ),
    ]