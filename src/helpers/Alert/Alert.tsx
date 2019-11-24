// import Swal from "sweetalert2";
import Swal from "sweetalert2";

export const AlertSwal = (title: any) => {
  return Swal.fire({
    title: title,
    icon: "success",
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
