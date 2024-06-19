<script lang="ts">
  import EmailIcon from "./EmailIcon.svelte";
  import PhoneIcon from "./PhoneIcon.svelte";

  let logo = "logo_sem_fundo.png";
  let address = "Av José Antônio de Oliveira Neto, Araricá, RS";
  let phoneNumber = "51 996162444";
  let emailAddress = "sleepgoldencamas@gmail.com";
  let facebookUrl = "https://www.facebook.com/example";
  let instagramUrl = "https://www.instagram.com/sleepgoldencamas";
</script>

<div class="footer">
  <div class="logo">
    <img src={logo} alt="Sleep Golden" class="" />
  </div>
  <div class="contact-info">
    <div>
      {address}
    </div>
    <div>
      <PhoneIcon />
      {phoneNumber}
    </div>
    <div>
      <EmailIcon />
      {emailAddress}
    </div>
  </div>
  <div class="social-icons">
    <a href="" target="_blank"
      ><img class="flex h-15 w-16" src="fb.png" alt="Facebook" /></a
    >
    <a href={instagramUrl} target="_blank"
      ><img class="flex h-15 w-16" src="insta.png" alt="Instagram" /></a
    >
  </div>
</div>

<style>
  .footer {
    background-color: #f0f0f0;
    color: black;
    padding: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .logo {
    width: 200px;
    padding: 16;
  }

  .contact-info {
    text-align: center;
    flex-grow: 1;
  }

  @media (max-width: 768px) {
    .contact-info {
      font-size: 0.75em;
    }
  }

  .contact-info div {
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
  }

  .social-icons {
    display: flex;
    gap: 5px;
  }
</style>
