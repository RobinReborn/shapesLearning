# -*- coding: utf-8 -*-
# Generated by Django 1.11.23 on 2019-08-26 13:47
from __future__ import unicode_literals

from django.db import migrations
import jsonfield.fields


class Migration(migrations.Migration):

    dependencies = [
        ('frontend', '0002_auto_20190823_1924'),
    ]

    operations = [
        migrations.AddField(
            model_name='action',
            name='stateSubset',
            field=jsonfield.fields.JSONField(default=dict),
        ),
    ]
