<template>
  <div class="flex flex-row flex-wrap items-center justify-center gap-4 w-full h-full overflow-auto">
    <ul class="hexagonal">
      <li class="hex-grid-item" v-for="i in 13" :key="i">
        <div class="hex-wrap">
          <a class="hex-link" href="#">
            <div class="hex-inner-item bg-slate-200 flex flex-row items-center justify-center">
              <div class="bg-blue-300 w-1/2 h-2/5"></div>
            </div>
          </a>
        </div>
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup></script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}

.hexagonal {
  display: flex;
  flex-wrap: wrap;
  width: 90%;
  margin: 0 auto;
  overflow: hidden;
  list-style-type: none;
}

.hex-grid-item {
  position: relative;
  visibility: hidden;
  outline: 1px solid transparent; /* fix for jagged edges in FF on hover transition */
  transition: all 0.5s;
  backface-visibility: hidden;
  will-change: transform;
  transition: all 0.5s;
}
.hex-grid-item::after {
  content: '';
  display: block;
  padding-bottom: 86.602%; /* =  100 / tan(60) * 1.5 */
}
.hex-wrap {
  position: absolute;
  width: 96%;
  padding-bottom: 110.851%; /* =  width / sin(60) */
  margin: 2%;
  overflow: hidden;
  visibility: hidden;
  outline: 1px solid transparent; /* fix for jagged edges in FF on hover transition */
  -webkit-transform: rotate3d(0, 0, 1, -60deg) skewY(30deg);
  -ms-transform: rotate3d(0, 0, 1, -60deg) skewY(30deg);
  transform: rotate3d(0, 0, 1, -60deg) skewY(30deg);
  transition: all 0.5s;
}
.hex-wrap * {
  position: absolute;
  visibility: visible;
  outline: 1px solid transparent; /* fix for jagged edges in FF on hover transition */
}
.hex-link {
  display: block;
  width: 100%;
  height: 100%;
  text-align: center;
  color: #fff;
  overflow: hidden;
  -webkit-transform: skewY(-30deg) rotate3d(0, 0, 1, 60deg);
  -ms-transform: skewY(-30deg) rotate3d(0, 0, 1, 60deg);
  transform: skewY(-30deg) rotate3d(0, 0, 1, 60deg);
}

.hex-inner-item {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-position: center center;
  background-size: cover;
  overflow: hidden;
  -webkit-clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
  clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
}

.hex-inner-item:before,
.hex-inner-item:after {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  content: '';
  opacity: 0;
  transition: opacity 0.5s;
}
.hex-inner-item:before {
  background: rgba(22, 103, 137, 0.3);
}
.hex-inner-item:after {
  background: linear-gradient(to top, transparent, rgba(0, 0, 0, 0.5), transparent);
}

@media (min-width: 1201px) {
  .hexagonal {
    padding-bottom: 4.4%;
  }
  .hex-grid-item {
    width: 20%; /* = 100 / 5 */
  }
  .hex-grid-item:nth-child(9n + 6) {
    margin-left: 10%; /* = width of .hex-grid-item / 2  to indent even rows */
  }
}

@media (max-width: 1200px) and (min-width: 901px) {
  .hexagonal {
    padding-bottom: 5.5%;
    font-size: 13px;
  }
  .hex-grid-item {
    width: 25%; /* = 100 / 4 */
  }
  .hex-grid-item:nth-child(7n + 5) {
    margin-left: 12.5%; /* = width of .hex-grid-item / 2  to indent even rows */
  }
}

@media (max-width: 900px) and (min-width: 601px) {
  .hexagonal {
    padding-bottom: 7.4%;
    font-size: 14px;
  }
  .hex-grid-item {
    width: 33.333%; /* = 100 / 3 */
  }
  .hex-grid-item:nth-child(5n + 4) {
    margin-left: 16.666%; /* = width of .hex-grid-item / 2  to indent even rows */
  }
}

@media (max-width: 600px) {
  .hexagonal {
    padding-bottom: 11.2%;
    font-size: 12px;
  }
  .hex-grid-item {
    width: 50%; /* = 100 / 3 */
  }
  .hex-grid-item:nth-child(3n + 3) {
    margin-left: 25%; /* = width of .hex-grid-item / 2  to indent even rows */
  }
}

@media (max-width: 400px) {
  .hexagonal {
    font-size: 8px;
  }
}
</style>
