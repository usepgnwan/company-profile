const validationerr = (arr, resp) => {
    Object.entries(resp).map((el,i)=>{
        resp[el[0]] = "";
    });
    Object.entries(arr).forEach((element,val) => { 
        resp[element[0]] = element[1][0];
    }); 
} 
const isAlert = ($this,msg,stat)=>{
    $this.$toast.open({
        message: msg,
        type: stat,
        duration: 1000 * 10,
        dismissible: true,
        position: 'top-right'
      });
}
export {validationerr, isAlert};