// function renderDsnv(dsnv){
// var content = "";
// for(var i = 0 ; i < dsnv.length ; i++){
//     var data = dsnv[i];
//     var trString = `<tr>
//                         <td>${data.taiKhoan}</td>
//                         <td>${data.name}</td>
//                         <td>${data.email}</td>
//                         <td>${data.ngay}</td>
//                         <td>${data.chucVu}</td>
//                         <td>${data.tienLuong().toLocaleString()} VNĐ</td>
//                         <td>${data.xepLoai()}</td>
//                         <td>
//                         <button onclick="xoaNv('${data.taiKhoan}')" class="btn btn-danger">Xoá</button> 
//                         <button data-toggle="modal" data-target="#myModal" onclick="suaNv('${data.taiKhoan}')" class="btn btn-warning">Sửa</button>                      
//                         </td>
                        
    
//     </tr>`
//     content = content + trString ;
// }
// document.getElementById("tableDanhSach").innerHTML=content;
// }

const renderDsnv= (dsnv)=>{
    let contentHTML = ""
  
    dsnv.forEach((value,index) =>{
     
       if (value.soNgay == undefined && value.congTy == undefined){
        value.soNgay = ""
        value.luong = ""
        value.congTy = ""
        value.triGia = ""
        value.danhGia = ""
      }
     else if(value.toan == undefined && value.congTy == undefined ){
        value.toan = ""
        value.li = ""
        value.hoa = ""
        value.congTy = ""
        value.triGia = ""
        value.danhGia = ""
      }
      else if (value.toan == undefined && value.soNgay == undefined){
        value.toan = ""
        value.li = ""
        value.hoa = ""
        value.soNgay = ""
        value.luong = ""
      }
      

       

       
       
       
       
        contentHTML += `
        <tr>
        <td>${value.ma}</td>
        <td>${value.hoTen}</td>
        <td>${value.diaChi}</td>
        <td>${value.email}</td>
       
        <td>${value.toan}</td>
        <td>${value.li}</td>
        <td>${value.hoa}</td>
        
        
        <td>${value.soNgay}</td>
        <td>${value.luong}</td>
        <td>${value.congTy}</td>
        <td>${value.triGia}</td>
        <td>${value.danhGia}</td>
        <td>
        <button onclick="suaNv('${value.ma}')" data-toggle="modal" data-target="#modalStudent"  class="btn btn-danger" >Edit Student</button>
        <button onclick="suaNv1('${value.ma}')" data-toggle="modal" data-target="#modalEmployee"  class="btn btn-danger" >Edit Employee</button>
        <button onclick="suaNv2('${value.ma}')" data-toggle="modal" data-target="#modalCustomer"  class="btn btn-danger" >Edit Customer</button>
        <button onclick="xoaNv('${value.ma}')" class="btn btn-success ">Delete</button>
        </td>
        </tr>
        
        
        `
       
    })
    console.log('contentHTML: ', contentHTML);
    // DOM toi table body hien thi contentHTML
    document.getElementById("tableDanhSach").innerHTML=contentHTML;

}













// const renderDsnv = (dsnv) => {
//     var contentHtml = "";
//     dsnv.array.forEach(value => {
//         var trString = `
//                 <tr>
//                 <td>${value.ma}<td>
                
                
//                 </tr>
        
        
//         `
//         contentHtml = contentHtml + trString;
//     });
//     document.getElementById("tableDanhSach").innerHTML=contentHtml;
    
// }