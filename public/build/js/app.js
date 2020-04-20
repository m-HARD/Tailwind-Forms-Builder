new Vue({
    el: '#app',
    data: {
        inputId:1,
        type:"text",
        labelName:"Name",
        size:"full",
        DelId:0,
        typeOfSize:{0:"full",1:"1/2",2:"1/3",3:"2/3",4:"1/4",5:"2/4",6:"3/4"},
        show:{
            items:[]
        },
    },    
    methods: {
        getId(){
            this.inputId++;
        },
        addinput(){
            this.inputss().forEach(input => {
                if (input.type == this.type) {
                    vshort = input;
                    showdiv = vshort.startdiv + vshort.label + vshort.input + vshort.enddiv;
                }
            });
            
            if (this.type == "space") {
                this.labelName = "Space";
            }
            
            this.show.items.push({
                id: this.inputId,
                name: this.labelName,
                text:showdiv
            });

            this.getId();
        },
        inputss(){
            inputs=[
                {
                    type:"text",
                    //header:"<div class='md:flex md:items-center mb-6'>\n",
                    startdiv:"\t\t\t<div class='w-full md:w-"+this.size+" px-3 mb-6'>\n",
                    label:"\t\t\t\t<label class='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2' for='grid-text-" + this.inputId + "'>" + this.labelName + "</label>\n",
                    //enddiv
                    //startdiv2:"\t<div class='md:w-4/6'>\n",
                    input:"\t\t\t\t<input class='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500' id='grid-text-" + this.inputId + "' type='text' placeholder='Enter " + this.labelName + "'>\n",
                    //enddiv
                    //enddiv--header
                    enddiv:"\t\t\t</div>\n"
                },
                {
                    type:"Password",
                    //header:"<div class='md:flex md:items-center mb-6'>\n",
                    startdiv:"\t\t\t<div class='w-full md:w-"+this.size+" px-3 mb-6'>\n",
                    label:"\t\t\t\t<label class='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2' for='grid-Password-" + this.inputId + "'>" + this.labelName + "</label>\n",
                    //enddiv
                    //startdiv2:"\t<div class='md:w-4/6'>\n",
                    input:"\t\t\t\t<input class='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500' id='grid-password-"+this.inputId+"' type='password' placeholder='*******'>\n",
                    //enddiv
                    //enddiv--header
                    enddiv:"\t\t\t</div>\n"
                },
                {
                    type:"number",
                    //header:"<div class='md:flex md:items-center mb-6'>\n",
                    startdiv:"\t\t\t<div class='w-full md:w-"+this.size+" px-3 mb-6'>\n",
                    label:"\t\t\t\t<label class='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2' for='grid-number-" + this.inputId + "'>" + this.labelName + "</label>\n",
                    //enddiv
                    //startdiv2:"\t<div class='md:w-4/6'>\n",
                    input:"\t\t\t\t<input class='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500' id='grid-number-"+this.inputId+"' type='number' placeholder='Enter "+this.labelName+"'>\n",
                    //enddiv
                    //enddiv--header
                    enddiv:"\t\t\t</div>\n"
                },
                {
                    type:"select",
                    //header:"<div class='md:flex md:items-center mb-6'>",
                    startdiv:"\t\t\t<div class='w-full md:w-"+this.size+" px-3 mb-6'>\n",
                    label:"\t\t\t\t<label class='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2' for='grid-select-" + this.inputId + "'>" + this.labelName + "</label>\n",
                    //enddiv
                    //startdiv2:"\t<div class='md:w-4/6'>\n",
                    input:"\t\t\t\t<div class='relative'>"+
                    "\n\t\t\t\t\t<select class='block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500' id='grid-select-"+this.inputId+"'>"+
                    "\n\t\t\t\t\t\t<option>1</option>\n\t\t\t\t\t\t<option>2</option>\n\t\t\t\t\t\t<option>3</option>\n\t\t\t\t\t</select>"+
                    "\n\t\t\t\t\t<div class='pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700'>"+
                    "\n\t\t\t\t\t\t<svg class='fill-current h-4 w-4' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'>"+
                    "\n\t\t\t\t\t\t<path d='M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z'/>"+
                    "\n\t\t\t\t\t\t</svg>\n\t\t\t\t\t</div>\n",
                    //enddiv
                    //enddiv--header
                    enddiv:"\t\t\t\t</div>\n\t\t\t</div>\n"
                },
                {
                    type:"textarea",
                    //header:"<div class='md:flex md:items-center mb-6'>\n",
                    startdiv:"\t\t\t<div class='w-full md:w-"+this.size+" px-3 mb-6'>\n",
                    label:"\t\t\t\t<label class='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2' for='grid-text-area-" + this.inputId + "'>" + this.labelName + "</label>\n",
                    //enddiv
                    //startdiv2:"\t<div class='md:w-4/6'>\n",
                    input:"\t\t\t\t<textarea class='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500' id='grid-text-area-"+this.inputId+"' placeholder='Enter "+this.labelName+"'></textarea>\n",
                    //enddiv
                    //enddiv--header
                    enddiv:"\t\t\t</div>\n"
                },
                {
                    type:"space",
                    //header:"<div class='md:flex md:items-center mb-6'>\n",
                    startdiv:"\t\t\t<div class='hidden md:block md:w-"+this.size+"  px-3 mb-6'>",
                    label:"",
                    //enddiv
                    //startdiv2:"\t<div class='md:w-4/6'>\n",
                    input:"",
                    //enddiv
                    //enddiv--header
                    enddiv:"</div>\n"
                },
                {
                    type:"button",
                    //header:"<div class='md:flex md:items-center mb-6'>\n",
                    startdiv:"\t\t\t<div class='w-full md:w-"+this.size+" px-3 mb-6'>\n",
                    label:"",
                    //enddiv
                    //startdiv2:"\t<div class='md:w-4/6'>\n",
                    input:"\t\t\t\t<button class='appearance-none block w-full bg-gray-400 text-gray-700 font-bold uppercase border border-gray-200 rounded-lg py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500' id='button-" + this.inputId + "'>"+this.labelName+"</button>\n",
                    //enddiv
                    //enddiv--header
                    enddiv:"\t\t\t</div>\n"
                },
            ];
            return inputs;
        },
        removeItem(id = this.DelId){
            var obj;
            this.show.items.forEach(input => {
                if (input.id == id) {
                    obj = input;
                }
            });

            let index = this.show.items.indexOf(obj);
            if(index !== -1){
                this.show.items.splice(index,1);
            }
        },
        refrech(){
            this.inputId=1;
            this.type="text";
            this.labelName="Name";
            this.size="full";
            this.DelId=0;
            this.show.items=[];
        },

    },
    computed: {
        ShowTotal(){
            var total = "";
            total +=    "<div class='flex justify-center my-2'>"+
                        "\n\t<form class='w-full max-w-xl bg-white rounded-lg p-6'>"+
                        "\n\t\t<div class='flex flex-wrap -mx-3 mb-6'>\n\n";
            this.show.items.forEach( (item) => {
                total += item.text ;
            });
            total +=    "\n\t\t</div>"+
                        "\n\t</form>"+
                        "\n</div>";
            return total;
        },
    },
});