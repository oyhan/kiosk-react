let AppConfiguration = {

    AppName: "بازرگانی دل‌دل",
    Server: {
        Address: "http://localhost",
        Port: "53163",
        Socket: function () {
            
            
            if (process.env.NODE_ENV === 'development'){
                

                // return "" ;
                return this.Address + ":" + this.Port

            }
            else{

            }
                return "" ;


        }
    }
}
export default AppConfiguration;