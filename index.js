var dsnv = [];
// function themNv() {
//     var _taiKhoan = document.getElementById("tknv").value;
//     var _name = document.getElementById("name").value;
//     var _email = document.getElementById("email").value;
//     var _matKhau = document.getElementById("password").value;
//     var _ngay = document.getElementById("datepicker").value;
//     var _luong = document.getElementById("luongCB").value * 1;
//     var _chucVu = document.getElementById("chucvu").value;
//     var _gioLam = document.getElementById("gioLam").value * 1;
    
//     var nv = new nhanVien(_taiKhoan, _name, _email, _matKhau, _ngay, _luong, _chucVu, _gioLam);
//     var isValid =kiemTrung(dsnv,nv.taiKhoan) && kiemTraDoDai(nv.taiKhoan, "tbTKNV", 4, 6)  ;
//     isValid = isValid & kiemTraName(nv.name, "tbTen");
//     isValid = isValid & kiemEmail(nv.email);
//     isValid = isValid & kiemTraPassword(nv.matKhau);
//     isValid = isValid & kiemTraDay(nv.ngay);
//     isValid = isValid & kiemTraDoDaiLuong(nv.luong, "tbLuongCB", 10e6, 20e6);
//     isValid = isValid & kiemTraChucVu(nv.chucVu);
//     isValid = isValid & kiemTraDoDaiH(nv.gioLam, "tbGiolam", 80, 200);

//     if (isValid) {
//         dsnv.push(nv);
//         renderDsnv(dsnv);
//     }
// }
function xoaNv(id) {
    var viTri = dsnv.findIndex(function (item) {
        return item.ma == id;
    })
    console.log('viTri: ', viTri);
    dsnv.splice(viTri, 1);
    renderDsnv(dsnv);
    console.log("hello")
}
function suaNv(id) {
    var viTri = dsnv.findIndex(function (item) {
        return item.ma == id;
    })
    var nv = dsnv[viTri];

   
     document.getElementById("idStudent").value = nv.ma ;
    document.getElementById("nameStudent").value = nv.hoTen;
   document.getElementById("emailStudent").value = nv.email;
     document.getElementById("adressStudent").value = nv.diaChi;
   document.getElementById("toanStudent").value = nv.toan;
  document.getElementById("liStudent").value = nv.li;
   document.getElementById("hoaStudent").value = nv.hoa;
   

   
   
   
   
   
   
    renderDsnv(dsnv);
}
function suaNv1(id) {
    var viTri = dsnv.findIndex(function (item) {
        return item.ma == id;
    })
    var nv = dsnv[viTri];

   
     document.getElementById("idStudent").value = nv.ma ;
    document.getElementById("nameStudent").value = nv.hoTen;
   document.getElementById("emailStudent").value = nv.email;
     document.getElementById("adressStudent").value = nv.diaChi;
  
   
  document.getElementById("soNgayEmployee").value = nv.soNgay;
   document.getElementById("luongEmployee").value = nv.luong;
   
   
   
   
   
   
    renderDsnv(dsnv);
}
function suaNv2(id) {
    var viTri = dsnv.findIndex(function (item) {
        return item.ma == id;
    })
    var nv = dsnv[viTri];

   
     document.getElementById("idStudent").value = nv.ma ;
    document.getElementById("nameStudent").value = nv.hoTen;
   document.getElementById("emailStudent").value = nv.email;
     document.getElementById("adressStudent").value = nv.diaChi;
  
document.getElementById("congTyCustomer").value = nv.congTy;
     document.getElementById("triGiaCustomer").value = nv.triGia;
    document.getElementById("danhGiaCustomer").value = nv.danhGia;
   
   
   
   
   
    renderDsnv(dsnv);
}








function capNhat() {

    let id = document.getElementById("idStudent").value ;
let name = document.getElementById("nameStudent").value;
let email = document.getElementById("emailStudent").value;
let adress = document.getElementById("adressStudent").value;
let toan = document.getElementById("toanStudent").value
let li = document.getElementById("liStudent").value
let hoa = document.getElementById("hoaStudent").value
var viTri = dsnv.findIndex(function (item) {
    return item.ma == id;
})

var st = new student (name,adress,id,email,toan,li,hoa);
    
    

 
    var st = dsnv[viTri];
   st.name = name;
  
   st.email = email;
  st.adress = adress;
  st.toan = toan;
  st.li = li;
  st.hoa = hoa;
       
    renderDsnv(dsnv);
    
}

function capNhat1() {

  
    let id = document.getElementById("idEmployee").value ;
    let name = document.getElementById("nameEmployee").value;
    let email = document.getElementById("emailEmployee").value;
    let adress = document.getElementById("adressEmployee").value;
    let soNgay = document.getElementById("soNgayEmployee").value;
    let luong =document.getElementById("luongEmployee").value;
    
    
    
    var viTri = dsnv.findIndex(function (item) {
        return item.ma == id;
    })
    var emp = new employee(name,adress,id,email,soNgay,luong)


    
    

 
    var emp = dsnv[viTri];
   emp.name = name;
  
   emp.email = email;
  emp.adress = adress;
  emp.soNgay = soNgay;
  emp.luong = luong;
       
    renderDsnv(dsnv);
    
}

function capNhat2() {

  
    let id = document.getElementById("idCustomer").value ;
    let name = document.getElementById("nameCustomer").value;
    let email = document.getElementById("emailCustomer").value;
    let adress = document.getElementById("adressCustomer").value;
    let tenCongTy = document.getElementById("congTyCustomer").value
    let triGia = document.getElementById("triGiaCustomer").value;
    let danhGia = document.getElementById("danhGiaCustomer").value
    
    
    
    var viTri = dsnv.findIndex(function (item) {
        return item.ma == id;
    })
   
    var cus = new customer(name,adress,id,email,tenCongTy,triGia,danhGia)


    
    

 
    var cus = dsnv[viTri];
  
    cus.name = name;
  
   cus.email = email;
  cus.adress = adress;
cus.congTy = tenCongTy;
cus.triGia = triGia;
cus.danhGia = danhGia;
       
    renderDsnv(dsnv);
    
}





















const themNv = () => { 
let id = document.getElementById("idStudent").value ;
let name = document.getElementById("nameStudent").value;
let email = document.getElementById("emailStudent").value;
let adress = document.getElementById("adressStudent").value;
let toan = document.getElementById("toanStudent").value * 1;
let li = document.getElementById("liStudent").value * 1 ;
let hoa = document.getElementById("hoaStudent").value * 1 ;
var st = new student (name,adress,id,email,toan,li,hoa);

dsnv.push(st);
console.log('dsnv: ', dsnv);
renderDsnv(dsnv);
 }
 const themNv1 = () => { 
    let id = document.getElementById("idEmployee").value ;
    let name = document.getElementById("nameEmployee").value;
    let email = document.getElementById("emailEmployee").value;
    let adress = document.getElementById("adressEmployee").value;
    let soNgay = document.getElementById("soNgayEmployee").value;
    let luong =document.getElementById("luongEmployee").value;
    var emp = new employee(name,adress,id,email,soNgay,luong)
    
    dsnv.push(emp);
    console.log('dsnv: ', dsnv);
    renderDsnv(dsnv);
     }

     const themNv2 = () => { 
        let id = document.getElementById("idCustomer").value ;
        let name = document.getElementById("nameCustomer").value;
        let email = document.getElementById("emailCustomer").value;
        let adress = document.getElementById("adressCustomer").value;
        let tenCongTy = document.getElementById("congTyCustomer").value
        let triGia = document.getElementById("triGiaCustomer").value;
        let danhGia = document.getElementById("danhGiaCustomer").value
        var cus = new customer(name,adress,id,email,tenCongTy,triGia,danhGia)
        
        dsnv.push(cus);
        console.log('dsnv: ', dsnv);
        renderDsnv(dsnv);
         }










