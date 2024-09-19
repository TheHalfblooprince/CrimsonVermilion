# -*- coding: utf-8 -*-
"""
Created on Tue Nov 17 21:51:19 2020

@author: win10
"""
from pydantic import BaseModel
from datetime import date

class BankNote(BaseModel):
    Open_stock: float
    High_stock: float
    Low_stock: float
    Volume_stock: float
    Date: str
