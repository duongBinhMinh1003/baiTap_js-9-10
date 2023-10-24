var dsnv = [];
function themNv() {
    var _taiKhoan = document.getElementById("tknv").value;
    var _name = document.getElementById("name").value;
    var _email = document.getElementById("email").value;
    var _matKhau = document.getElementById("password").value;
    var _ngay = document.getElementById("datepicker").value;
    var _luong = document.getElementById("luongCB").value * 1;
    var _chucVu = document.getElementById("chucvu").value;
    var _gioLam = document.getElementById("gioLam").value * 1;
    
    var nv = new nhanVien(_taiKhoan, _name, _email, _matKhau, _ngay, _luong, _chucVu, _gioLam);
    var isValid =kiemTrung(dsnv,nv.taiKhoan) & kiemTraDoDai(nv.taiKhoan, "tbTKNV", 4, 6)  ;
    isValid = isValid & kiemTraName(nv.name, "tbTen");
    isValid = isValid & kiemEmail(nv.email);
    isValid = isValid & kiemTraPassword(nv.matKhau);
    isValid = isValid & kiemTraDay(nv.ngay);
    isValid = isValid & kiemTraDoDaiLuong(nv.luong, "tbLuongCB", 10e6, 20e6);
    isValid = isValid & kiemTraChucVu(nv.chucVu);
    isValid = isValid & kiemTraDoDaiH(nv.gioLam, "tbGiolam", 80, 200);

    if (isValid) {
        dsnv.push(nv);
        renderDsnv(dsnv);
    }
}
function xoaNv(id) {
    var viTri = dsnv.findIndex(function (item) {
        return item.taiKhoan == id;
    })
    console.log('viTri: ', viTri);
    dsnv.splice(viTri, 1);
    renderDsnv(dsnv);
}
function suaNv(id) {
    var viTri = dsnv.findIndex(function (item) {
        return item.taiKhoan == id;
    })
    var nv = dsnv[viTri];
    document.getElementById("tknv").value = nv.taiKhoan;
    document.getElementById("name").value = nv.name;
    document.getElementById("email").value = nv.email;
    document.getElementById("password").value = nv.matKhau;
    document.getElementById("datepicker").value = nv.ngay;
    document.getElementById("luongCB").value = nv.luong;
    document.getElementById("chucvu").value = nv.chucVu;
    document.getElementById("gioLam").value = nv.gioLam;
    renderDsnv(dsnv);
}
function capNhat() {

    var _taiKhoan = document.getElementById("tknv").value;
    var _name = document.getElementById("name").value;
    var _email = document.getElementById("email").value;
    var _matKhau = document.getElementById("password").value;
    var _ngay = document.getElementById("datepicker").value;
    var _luong = document.getElementById("luongCB").value * 1;
    var _chucVu = document.getElementById("chucvu").value;
    var _gioLam = document.getElementById("gioLam").value * 1;
    var viTri = dsnv.findIndex(function (item) {
        return item.taiKhoan == _taiKhoan;
    })
    var nv = new nhanVien(_taiKhoan, _name, _email, _matKhau, _ngay, _luong, _chucVu, _gioLam);
    console.log('viTri: ', viTri);
    var isValid =kiemTrung(dsnv,nv.taiKhoan) & kiemTraDoDai(nv.taiKhoan, "tbTKNV", 4, 6)  ;
    isValid = isValid & kiemTraName(nv.name, "tbTen");
    isValid = isValid & kiemEmail(nv.email);
    isValid = isValid & kiemTraPassword(nv.matKhau);
    isValid = isValid & kiemTraDay(nv.ngay);
    isValid = isValid & kiemTraDoDaiLuong(nv.luong, "tbLuongCB", 10e6, 20e6);
    isValid = isValid & kiemTraChucVu(nv.chucVu);
    isValid = isValid & kiemTraDoDaiH(nv.gioLam, "tbGiolam", 80, 200);

    if(isValid){
    var nv = dsnv[viTri];
    nv.name = _name;
    nv.email = _email;
    nv.matKhau = _matKhau;
    nv.ngay = _ngay;
    nv.luong = _luong;
    nv.ngay = _ngay;
    nv.chucVu = _chucVu;
    nv.gioLam = _gioLam;
    nv.taiKhoan_taiKhoan;    
    renderDsnv(dsnv);
    }
}




function timNv() {
    var _taiKhoan = document.getElementById("tknv").value;
    var loaiNhanVien = document.getElementById("searchName").value;

    // Tìm vị trí của nhân viên trong mảng dsnv
    var viTri = dsnv.findIndex(function (item) {
        return item.taiKhoan == _taiKhoan;
    });

    // Kiểm tra nếu viTri hợp lệ
    if (viTri !== -1) {
        var nv = dsnv[viTri];
        console.log('dsnv: ', dsnv);
        var xepLoai = nv.xepLoai(); // Giả định xepLoai trả về chuỗi xếp loại

        // Hiển thị xếp loại của nhân viên
        console.log(xepLoai);

        // Lọc danh sách nhân viên theo loại
        var filterNv = dsnv.filter(function (item) {
            return item.xepLoai() == loaiNhanVien;
        });
        var content="";
        // Hiển thị danh sách nhân viên theo loại
        filterNv.forEach(function (data) {
            content+=`<tr>
            <td>${data.taiKhoan}</td>
            <td>${data.name}</td>
            <td>${data.email}</td>
            <td>${data.ngay}</td>
            <td>${data.chucVu}</td>
            <td>${data.tienLuong().toLocaleString()} VNĐ</td>
            <td>${data.xepLoai()}</td>
            <td>
            <button onclick="xoaNv('${data.taiKhoan}')" class="btn btn-danger">Xoá</button> 
            <button data-toggle="modal" data-target="#myModal" onclick="suaNv('${data.taiKhoan}')" class="btn btn-warning">Sửa</button>                      
            </td>
            

</tr>`
        });
    } else {
        console.log("Không tìm thấy nhân viên có tài khoản " + _taiKhoan);
    }
    document.getElementById("tableDanhSach").innerHTML=content;
}












