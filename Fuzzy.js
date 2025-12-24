var fuzzyjs = {
   min_value : "null",
   max_value : "null",
   fuzzy_linguistic_var : false,
   // fuzzy linguistic variable terdeteksi
   fuzzy_linguistic_detected : function(){
     this.fuzzy_linguistic_var = true;
   },
   // menetralkan fuzzy linguistic variable
   fuzzy_linguistic_neuturalize : function(){
     this.fuzzy_linguistic_var = false;
   }
};
