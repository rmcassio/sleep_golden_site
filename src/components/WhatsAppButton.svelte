<script lang="ts">
  export const whatsLink =
    "https://wa.me/+5551996162444?text=Olá!%20vim%20pelo%20site%20e%20gostaria%20de%20saber%20mais";
</script>

<button class="fab" on:click={() => window.open(whatsLink)}>
  <img src="whats_app_logo.png" alt="WhatsApp" class="whatsapp-icon" />
</button>

<style>
  .fab {
    position: fixed;
    bottom: 20px;
    right: 20px;
    background-color: green;
    color: white;
    border: none;
    border-radius: 50%;
    width: 60px;
    height: 60px;
    font-size: 24px;
    cursor: pointer;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .whatsapp-icon {
    width: 60px;
    height: 60px;
  }
</style>
