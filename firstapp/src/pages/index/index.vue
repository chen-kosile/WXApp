 <template>
   <div class="container" @click="clickHandle">
     <div class="message">{{msg}}</div>
   </div>
 </template>

 <script>
 export default {
   data(){
     return {
       msg: 'hello'
     }
   },
   methods: {
     clickHandle () {
       this.msg = 'clicked！！！'
     }
   }
 }
 </script>
 <style scoped>
 .message {
   color: red;
   padding: 10px;
   text-align: left;
 }
 </style>
 
 
 