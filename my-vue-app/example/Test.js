let products = ["mercedes", "audi", "ford", "lamborghini"];

const showProduct = () => {
  if(products.length === 0) {
    console.log("Không có sản phẩm để hiển thị");
  } else {
    for(let i=0; i<products.length; i++) {
      console.log(products[i]);
    }
  }
}
showProduct();


const addProduct = () => {
  let newProduct = prompt("Nhập tên sản phẩm mới:");
  while(newProduct.length < 5) {
    newProduct = prompt("Tên sản phẩm phải có ít nhất 5 ký tự:");
  }
  products.push(newProduct);
  console.log("Thêm thành công!");
}
addProduct();


const removeProduct = () => {
  let removeProduct = prompt("Nhập tên sản phẩm cần xóa:");
  let index = products.indexOf(removeProduct);
  if(index === -1) {
    console.log("Không tìm thấy sản phẩm cần xóa");
  } else {
    products.splice(index, 1);
    console.log("Xóa thành công!");
    showProduct();
  }
}
removeProduct();


const updateProduct = () => {
  let updateProduct = prompt("Nhập tên sản phẩm cần cập nhật:");
  let index = products.indexOf(updateProduct);
  if(index === -1) {
    console.log("Không tìm thấy sản phẩm cần cập nhật");
  } else {
    let newProductName = prompt("Nhập tên mới cho sản phẩm:");
    products[index] = newProductName;
    console.log("Cập nhật thành công!");
    showProduct();
  }
}
updateProduct();


const removeAllProduct = () => {
  products = [];
  console.log("Xóa tất cả thành công");
  showProduct();
}
removeAllProduct();







