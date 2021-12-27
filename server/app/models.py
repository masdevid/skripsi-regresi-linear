from app import db
from marshmallow import Schema, fields

class User(db.Model):   
    id = db.Column(db.Integer(), primary_key=True)
    username = db.Column(db.String())
    password = db.Column(db.String())
    def __init__(self, id, username, password):
        self.id = id
        self.username = username
        self.password = password
    

class UserSchema(Schema):
    id = fields.Number()
    username = fields.Str()
    password = fields.Str()

class Prodi(db.Model):   
    id = db.Column(db.Integer(), primary_key=True)
    nama = db.Column(db.String())
    def __init__(self,id, nama):
        self.id = id
        self.nama = nama
    
class ProdiSchema(Schema):
    id = fields.Number()
    nama = fields.Str()

class Topik(db.Model):   
    id = db.Column(db.Integer(), primary_key=True)
    nama = db.Column(db.String())
    def __init__(self, id, nama):
        self.id = id
        self.nama = nama
    
class TopikSchema(Schema):
    id = fields.Number()
    nama = fields.Str()

class Skripsi(db.Model):   
    id = db.Column(db.Integer(), primary_key=True)
    judul = db.Column(db.String())
    topik = db.Column(db.Integer(), db.ForeignKey('topik.id'))
    nim = db.Column(db.String())
    prodi = db.Column(db.Integer(), db.ForeignKey('prodi.id'))
    tahun = db.Column(db.Integer())
    def __init__(self, id, judul, topik, nim, prodi, tahun):
        self.id = id
        self.judul = judul
        self.topik = topik
        self.nim = nim
        self.prodi = prodi
        self.tahun = tahun
    
class SkripsiSchema(Schema):
    id = fields.Number()
    judul = fields.Str()
    topik = fields.Number()
    nim = fields.Str()
    prodi = fields.Number() 
    tahun = fields.Number()

class Mahasiswa(db.Model):   
    id = db.Column(db.Integer(), primary_key=True)
    nama = db.Column(db.String())
    nim = db.Column(db.String())
    prodi = db.Column(db.Integer(), db.ForeignKey('prodi.id'))
    def __init__(self, id, nama, nim, prodi):
        self.id = id
        self.nama = nama
        self.nim = nim
        self.prodi = prodi
    
class MahasiswaSchema(Schema):
    id = fields.Number()
    nama = fields.Str()
    nim = fields.Str()
    prodi = fields.Number()