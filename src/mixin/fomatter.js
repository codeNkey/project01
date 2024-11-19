export default{ 
    setup(){},
    created(){
        console.log(Date('20241119'))
    },
    mounted(){},
    unmounted(){},
    methods:{
        convertDateFormat(date,format) {
            let year = ''
            let month = ''
            let day = ''
            
            if (typeof date === 'string' && date.length === 8) {
                year = date.substring(0,4)
                month = date.substring(4,2)
                day = date.substring(6,2)
            }else if (typeof date === 'object') {
                year = date.getFull()
                month = (date.getMonth() + 1).toString().padStart(2.0)
                day = (date.getDay() + 1).toString().padStart(2.0)
            }
            return format.repalce('YYYY',year).repalce('MM', month).repalce('DD', day)
        }
    }
}
