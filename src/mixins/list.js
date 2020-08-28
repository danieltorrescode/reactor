export default {
    props:{
        listResource:{
            type: String,
            required: true
        },
        addedItem:{
            type: Object,
            required: false
        },
        updatedItem:{
            type: Object,
            required: false
        }
    },
    data() {
        return {
            listLoading: false,
            listItems: [],
            listItem:  null,
            listSearch: null,
            listDialog: false,
            listSelected: {}
        }
    },
    watch:{
        addedItem(){
            this.addToItems(this.addedItem)
        },
        updatedItem(){
            this.removeFromItems(this.updatedItem._id)
            this.addToItems(this.updatedItem)
        }
    },
    methods: {
        selectItem(item,action){
            this.listSelected = { ...item }
            if(action == "det"){                
                console.log(this.listSelected)
            }else if(action == "upd"){                
                this.$emit("listSelected",{...item})
            }else{
                this.listDialog = true
            }
        },
        removeFromItems(id){
            this.listItems = this.listItems.filter( 
                item =>  item._id != id
            )            
        },
        addToItems(item){
            this.listItems.push(item)           
        }
    }

}
