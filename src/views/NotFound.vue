<template>
    <div class="notFound">
        <div class="notFound__wrapper"></div>
        <div class="notFound__inner">
            <div class="notFound__content">
                <h1>404</h1>
                <p>There's nothing here.</p>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.notFound {
    min-height: 100vh;
    background-image: url('../assets/404.gif');
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    position: relative;
    margin: 0;
    padding: 0;

    &__wrapper {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.75);
        display: flex;
        align-items: center;
        justify-content: center;
    }

    &__inner {
        position: absolute;
        left: 0;
        top: -3rem;
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #fff;
    }

    &__content {
        text-align: center;

        h1 {
            font-size: 150px;
            font-weight: normal;
            margin: 0;
        }
    }
}
</style>

