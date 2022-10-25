  <script setup>
  import { reactive, onMounted, ref } from "vue";
  import axios from "axios";
    

  
  
  
  let state = reactive({
    showModal: false,
    step: 1,
    selectedItem: null,
    errors: {},
    url: import.meta.env.VITE_WEB_URL,
    projects: [],
    locations: [],
    donationTypes: [],
    donations: [],
    countries,
    totalAmount: 0,
    current_donation: { ...current_donation },
    form: { ...form },
    stripePublicKey: null
  });
  onMounted(() => {
    
  });
  
  </script>
  
    <template>
    </template>