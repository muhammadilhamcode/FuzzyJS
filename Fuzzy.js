var fuzzyjs = {
   min_value : "null",
   max_value : "null",
   fuzzy_linguistic_var : false,
   fuzzy_linguistic_var_status : "null",
   value_of_fuzzy : 0,
   
   // set nilai minimum
   set_min : function(min_v){
     this.min_value = min_v;
   },
   // set nilai maximum
   set_max : function(max_v){
     this.max_value = max_v;
   },
   // set nilai fuzzy
   set_value_of_fuzzy : function(fuzzy_v){
     this.value_of_fuzzy = fuzzy_v;
   },
   // set status fuzzy
   set_fuzzy_linguistic_var_status : function(fuzzy_status){
     this.fuzzy_linguistic_var_status = fuzzy_status;
   },
   // fuzzy linguistic variable terdeteksi
   fuzzy_linguistic_detected : function(){
     this.fuzzy_linguistic_var = true;
   },
   // menetralkan fuzzy linguistic variable
   fuzzy_linguistic_neuturalize : function(){
     this.fuzzy_linguistic_var = false;
   },
   keadaan fuzzy
     fuzzy : function(){
   }
};
