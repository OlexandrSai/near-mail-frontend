<template>
  <header>
        <div class="hidden md:block container mx-auto px-6">
            <div class="flex justify-between items-center py-3">
                <a href="@" class="flex items-center text-white font-semibold text-lg">
                    <img src="@/assets/near-logo-white.png" alt="logo" class="h-8 w-8 mr-4">
                    NEAR Mail
                </a>
                <div class="flex items-center space-x-6">
                    <a href="#" class="text-white hover:underline">Sign up</a>
                    <a href="#" class="btn-home">Login with NEAR</a>
                </div>
            </div>
        </div>
        <div class="block md:hidden container mx-auto px-6">
            <div class="flex items-center justify-between py-3">
                <a href="@" class="flex items-center text-white font-semibold text-lg">
                    <img src="@/assets/near-logo-white.png" alt="logo" class="h-8 w-8 mr-4">
                    NEAR Mail
                </a>
                <a href="#" class="text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
                    </svg>
                </a>
            </div>
        </div>
    </header>
</template>

<script>
export default {

}
</script>

<style>

</style>