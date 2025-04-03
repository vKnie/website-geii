<!-- AdminLayout.vue -->
<template>
  <div class="flex h-screen bg-gray-100">
    <!-- Sidebar -->
    <aside class="w-64 bg-white shadow-md">
      <div class="p-4">
        <h2 class="text-xl font-semibold text-gray-800">Tableau de bord - Administrateur</h2>
      </div>
      <nav class="mt-6">
        <router-link to="/admin" class="block px-4 py-2 text-gray-800 hover:bg-gray-200">Tableau de bord</router-link>
        <router-link to="/admin/users" class="block px-4 py-2 text-gray-800 hover:bg-gray-200">Utilisateurs</router-link>
        <router-link to="/admin/formations" class="block px-4 py-2 text-gray-800 hover:bg-gray-200">Formations</router-link>
      </nav>
    </aside>

    <!-- Main Content -->
    <main class="flex-1 p-6">
      <router-view />
    </main>
  </div>
</template>

<script>
export default {
  name: "AdminLayout",
};
</script>
