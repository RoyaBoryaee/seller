<template>
  <label class="file-select">
    <div class="select-button">
      <span v-if="value">{{value.name}}</span>
      <span v-else>انتخاب فایل</span>
    </div>
    <input type="file" @change="handleFileChange" />
  </label>
</template>

<script>
export default {
  props: {
    value: File,
   
  },
data(){
  return{
    base64:"",
  }
},
  methods: {
   
  
   async handleFileChange(e) {
      let file= e.target.files[0];
       this.$emit('input', file)
      this.name = file.name;
      let toBase64= rawfile => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
    })
    toBase64(file)
    .then(data => {
     
           this.$emit("base64", data)
    })
    .catch(error => {
      console.log(error)
    })
   
    }
  }
}
</script>

<style scoped>
.file-select > .select-button {
  padding: 1rem;

  color: white;
  background-color: #2ea169;

  border-radius: 0.3rem;

  text-align: center;
  font-weight: bold;
}

.file-select > input[type="file"] {
  display: none;
}
</style>