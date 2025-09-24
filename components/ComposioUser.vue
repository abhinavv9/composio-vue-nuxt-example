<template>
  <div class="user-profile">
    <h2>User Profile</h2>
    <div v-if="loading">
      <p>Loading user data...</p>
    </div>
    <div v-else-if="error">
      <p class="error">Error fetching user data: {{ error.message }}</p>
    </div>
    <div v-else-if="user">
      <p><strong>Name:</strong> {{ user.name || 'N/A' }}</p>
      <p><strong>Email:</strong> {{ user.email || 'N/A' }}</p>
      <p><strong>ID:</strong> {{ user.id || 'N/A' }}</p>
    </div>
    <button @click="fetchUserData" :disabled="loading || !!error">
      {{ loading ? 'Refreshing...' : 'Refresh Data' }}
    </button>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

// Access the Composio instance injected by the plugin
const { $composio } = useNuxtApp();

const user = ref(null);
const loading = ref(false);
const error = ref(null);

const fetchUserData = async () => {
  if (!$composio) {
    error.value = new Error('Composio instance is not available.');
    console.error('Composio instance is not available.');
    return;
  }

  loading.value = true;
  error.value = null;
  user.value = null;

  try {
    // --- IMPORTANT ---
    // Replace 'userService' and 'getUser' with actual Composio methods
    // and 'someUserId' with a valid user identifier for the service you are using.
    // This is a hypothetical example based on the codelab.
    console.warn("Using placeholder API call. Replace with actual Composio service and method.");
    
    // Example: If Composio had a service like `identityService` to fetch user details
    // const response = await $composio.identityService.getUserProfile('user-123');
    
    // For demonstration, we'll simulate a successful API call with dummy data.
    // In a real scenario, the structure of 'response' would come from the Composio SDK.
    await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate network latency
    const simulatedResponse = {
      id: 'user-' + Math.floor(Math.random() * 1000),
      name: 'John Doe',
      email: 'john.doe@example.com'
    };
    user.value = simulatedResponse;
    
    // If the real call was successful:
    // user.value = response;

  } catch (e) {
    console.error('Error fetching user data:', e);
    error.value = e;
  } finally {
    loading.value = false;
  }
};

onMounted(fetchUserData);
</script>

<style scoped>
.user-profile {
  border: 1px solid #ccc;
  padding: 20px;
  margin: 20px auto;
  max-width: 400px;
  border-radius: 8px;
  background-color: #f9f9f9;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

h2 {
  color: #333;
  margin-bottom: 15px;
}

button {
  background-color: #007bff;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  margin-top: 15px;
  transition: background-color 0.3s ease;
}

button:hover:not(:disabled) {
  background-color: #0056b3;
}

button:disabled {
  background-color: #cccccc;
  cursor: not-allowed;
}

.error {
  color: #d9534f;
  font-weight: bold;
}
</style>
