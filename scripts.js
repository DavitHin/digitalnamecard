.background-icons {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    overflow: hidden;
}

.background-icons img {
    opacity: 0.1;
    animation: float 10s infinite alternate, rotate 20s linear infinite, scale 10s ease-in-out infinite alternate;
}

@keyframes float {
    0% {
        transform: translateY(0);
    }
    50% {
        transform: translateY(-20px);
    }
    100% {
        transform: translateY(0);
    }
}

@keyframes rotate {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
}

@keyframes scale {
    0% {
        transform: scale(1);
    }
    100% {
        transform: scale(1.2);
    }
}
