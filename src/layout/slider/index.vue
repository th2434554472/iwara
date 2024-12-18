<template>
    <div class="menu">
        <ul>
            <a href="#"><li>home</li></a>
            <a href="#"><li>video</li></a>
            <a href="#"><li>image</li></a>
        </ul>       
    </div>
</template>

<style lang="scss" scoped>
.menu {
    a {
        color: black;
        li {
            background-color: gray;
            padding: 10px;
            margin: 1px 0;
            border-radius: 10px;
            text-align: center;
            &:hover {
                background-color: aquamarine
            }
        }
    }
}
</style>