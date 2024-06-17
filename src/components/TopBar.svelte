<script>
    import EmailIcon from "./EmailIcon.svelte";
    import PhoneIcon from "./PhoneIcon.svelte";

    // Define your contact information and social media URLs
    let phoneNumber = "51 994055464";
    let emailAddress = "contact@example.com";
    let facebookUrl = "https://www.facebook.com/example";
    let instagramUrl = "https://www.instagram.com/example";
</script>

<div class="top-bar">
    <div class="contact-info">
        <a href="tel:{phoneNumber}" class="contact-info px-2"
            ><PhoneIcon />{phoneNumber}</a
        >
        <a href="mailto:{emailAddress}" class="contact-info px-2"
            ><EmailIcon />{emailAddress}</a
        >
    </div>
    <div class="social-icons">
        <a href={facebookUrl} target="_blank"
            ><img src="/fb.png" alt="Facebook" /></a
        >
        <a href={instagramUrl} target="_blank"
            ><img src="/insta.png" alt="Instagram" /></a
        >
        <!-- Replace "facebook-icon.png" and "instagram-icon.png" with your actual icon files -->
    </div>
</div>

<style>
    .top-bar {
        background-color: #f0f0f0; /* Grey background color */
        height: 50px; /* Adjust height as needed */
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 10px;
    }

    .contact-info {
        display: flex;
        align-items: center;
        text-decoration: none;
        color: #333;
        font-size: 14px;
    }

    .social-icons {
        display: flex;
        gap: 10px;
    }

    .social-icons img {
        height: 30px; /* Adjust icon size */
        width: auto;
        cursor: pointer;
    }
</style>
