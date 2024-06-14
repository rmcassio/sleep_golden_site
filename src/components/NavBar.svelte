<script>
    export const logo = "src/assets/images/logo_sem_fundo.png";
    export const whatsLink =
        "https://wa.me/+5551994055464?text=Olá!%20vim%20pelo%20site%20e%20gostaria%20de%20saber%20mais";
</script>

<nav class="bg-white shadow-md">
    <div class="container mx-auto px-6 py-3">
        <div class="flex items-center justify-between">
            <div>
                <img src={logo} alt="Sleep Golden" class="h-10" />
            </div>
            <ul class="flex space-x-4">
                <li class="text-green-500 hover:text-green-700">
                    <a
                        href={whatsLink}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        WhatsApp
                    </a>
                </li>
            </ul>
        </div>
    </div>
</nav>
