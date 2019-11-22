// import Swal from "sweetalert2";
import Swal from "sweetalert2";

Swal.fire({
  title: "a",
  showConfirmButton: false
});
export const AlertSwal = (title: any, type: any) => {
  return Swal.fire({
    title: title,
    showConfirmButton: false,
    customClass: {
      container: "swal-container ml-80"
    }
  });
};

export const AlertSwalDelete = (resultCallBack: any) => {
  return Swal.fire({
    title: "Silmek istediğinize emin misiniz?",
    text: "Bu işlem geri alınamaz!",
    showCancelButton: true,
    confirmButtonColor: "#e53e3e",
    cancelButtonColor: "",
    confirmButtonText: "Evet, eminim!",
    cancelButtonText: "Vazgeç"
  }).then(result => {
    resultCallBack(result.value);
  });
};
