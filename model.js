function nhanVien(_taiKhoan , _name , _email , _matKhau , _ngay , _luong , _chucVu , _gioLam){
this.taiKhoan = _taiKhoan;
this.name = _name;
this.email = _email;
this.matKhau = _matKhau;
this.ngay = _ngay;
this.luong = _luong;
this.chucVu = _chucVu;
this.gioLam = _gioLam;
this.tienLuong = function tinhTienLuong(){
    var tongLuong = 0;
    if(this.chucVu == "Sếp"){
        tongLuong =  this.luong * 3;
    }
    else if(this.chucVu == "Trưởng phòng"){
        tongLuong = this.luong *2;
    }
    else{
        tongLuong = this.luong;
    }
    return tongLuong;
}
this.xepLoai = function xepLoaiNv(){
    if(this.gioLam >= 192 ){
        return "Nhân viên xuất sắc";
    }
    else if(this.gioLam >= 176 ){
        return "Nhân viên giỏi";
    }
    else if(this.gioLam >= 160){
        return "Nhân viên khá";
    }
    else{
        return "Nhân viên trung bình";
    }
}  
}