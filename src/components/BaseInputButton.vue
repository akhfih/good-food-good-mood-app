<template>
  <div class="container">
    <input type="text" placeholder="Your email address" />
    <button><slot /></button>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
.container {
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  position: relative;

  input {
    height: 40px;
    width: 100%;
    border: 1px solid #000000;
    border-radius: 8px;
    padding: 15px 0 15px 15px;
  }

  button {
    width: 60px;
    height: 40px;
    background-color: #8bac3e;
    color: #ffffff;
    text-transform: uppercase;
    border-style: none;
    border-radius: 0px 8px 8px 0px;
    position: absolute;
    cursor: pointer;
    right: 0;

    &:hover {
      background-color: map-get(map-get($color, avocado), 1);
      box-shadow: 0px 8px 32px rgba(102, 107, 226, 0.35);
    }
  }
}
</style>
