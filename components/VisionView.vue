<template>
  <div class="flex flex-row flex-wrap items-center justify-center gap-4 w-full h-full overflow-auto vision-view">
    <div v-for="i in 10" :key="i" class="bg-slate-300 w-32 h-32 p-8 hive-item vision-view-item"></div>
  </div>
</template>

<script lang="ts" setup></script>

<style scoped>
.vision-view {
  display: grid;
  /* width: auto; */
  justify-content: center;
  grid-auto-flow: dense;
  grid-template-columns: repeat(auto-fit, 70px);
  grid-template-rows: repeat(auto-fit, minmax(112px, 112px));
  grid-auto-rows: 112px;
  margin-bottom: 42px;
}
.vision-view > * {
  -webkit-clip-path: polygon(50% 0, 95% 25%, 95% 75%, 50% 100%, 5% 75%, 5% 25%);
  clip-path: polygon(50% 0, 95% 25%, 95% 75%, 50% 100%, 5% 75%, 5% 25%);
}
.vision-view-item {
  position: relative;
  height: 140px;
  background-color: gold;
  grid-column: 2 span;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-style: italic;
  font-size: 35px;
  box-shadow: inset 0 0 70px 35px #ff9a00 73;
  transition: clip-path 300ms, background-color 300ms;
}
.vision-view-item:hover {
  background-color: tomato;
}
@media screen and (max-width: 222px) {
  .vision-view {
    grid-template-columns: repeat(auto-fit, 70px);
    grid-template-rows: 140px;
    grid-auto-rows: 140px;
    margin-bottom: 42px;
  }
  .vision-view-item {
    -webkit-clip-path: polygon(25% 5%, 75% 5%, 100% 50%, 75% 95%, 25% 95%, 0 50%);
    clip-path: polygon(25% 5%, 75% 5%, 100% 50%, 75% 95%, 25% 95%, 0 50%);
  }
}
@media screen and (min-width: 223px) and (max-width: 292px) {
  .vision-view-item:nth-child(2),
  .vision-view-item:nth-child(2n + 4) {
    grid-column: 2 / span 2;
  }
}
@media screen and (min-width: 293px) and (max-width: 362px) {
  .vision-view-item:nth-child(3),
  .vision-view-item:nth-child(3n + 6) {
    grid-column: 2 / span 2;
  }
}
@media screen and (min-width: 363px) and (max-width: 432px) {
  .vision-view-item:nth-child(3),
  .vision-view-item:nth-child(4n + 7) {
    grid-column: 2 / span 2;
  }
}
@media screen and (min-width: 433px) and (max-width: 502px) {
  .vision-view-item:nth-child(4),
  .vision-view-item:nth-child(5n + 9) {
    grid-column: 2 / span 2;
  }
}
@media screen and (min-width: 503px) and (max-width: 572px) {
  .vision-view-item:nth-child(4),
  .vision-view-item:nth-child(6n + 10) {
    grid-column: 2 / span 2;
  }
}
@media screen and (min-width: 573px) and (max-width: 642px) {
  .vision-view-item:nth-child(5),
  .vision-view-item:nth-child(7n + 12) {
    grid-column: 2 / span 2;
  }
}
@media screen and (min-width: 643px) and (max-width: 712px) {
  .vision-view-item:nth-child(5),
  .vision-view-item:nth-child(8n + 13) {
    grid-column: 2 / span 2;
  }
}
@media screen and (min-width: 713px) and (max-width: 782px) {
  .vision-view-item:nth-child(6),
  .vision-view-item:nth-child(9n + 15) {
    grid-column: 2 / span 2;
  }
}
@media screen and (min-width: 783px) and (max-width: 852px) {
  .vision-view-item:nth-child(6),
  .vision-view-item:nth-child(10n + 16) {
    grid-column: 2 / span 2;
  }
}
@media screen and (min-width: 853px) and (max-width: 922px) {
  .vision-view-item:nth-child(7),
  .vision-view-item:nth-child(11n + 18) {
    grid-column: 2 / span 2;
  }
}
@media screen and (min-width: 923px) and (max-width: 992px) {
  .vision-view-item:nth-child(7),
  .vision-view-item:nth-child(12n + 19) {
    grid-column: 2 / span 2;
  }
}
@media screen and (min-width: 993px) and (max-width: 1062px) {
  .vision-view-item:nth-child(8),
  .vision-view-item:nth-child(13n + 21) {
    grid-column: 2 / span 2;
  }
}
@media screen and (min-width: 1063px) and (max-width: 1132px) {
  .vision-view-item:nth-child(8),
  .vision-view-item:nth-child(14n + 22) {
    grid-column: 2 / span 2;
  }
}
@media screen and (min-width: 1133px) and (max-width: 1202px) {
  .vision-view-item:nth-child(9),
  .vision-view-item:nth-child(15n + 24) {
    grid-column: 2 / span 2;
  }
}
@media screen and (min-width: 1203px) and (max-width: 1272px) {
  .vision-view-item:nth-child(9),
  .vision-view-item:nth-child(16n + 25) {
    grid-column: 2 / span 2;
  }
}
@media screen and (min-width: 1273px) and (max-width: 1342px) {
  .vision-view-item:nth-child(10),
  .vision-view-item:nth-child(17n + 27) {
    grid-column: 2 / span 2;
  }
}
@media screen and (min-width: 1343px) and (max-width: 1412px) {
  .vision-view-item:nth-child(10),
  .vision-view-item:nth-child(18n + 28) {
    grid-column: 2 / span 2;
  }
}
@media screen and (min-width: 1413px) and (max-width: 1482px) {
  .vision-view-item:nth-child(11),
  .vision-view-item:nth-child(19n + 30) {
    grid-column: 2 / span 2;
  }
}
@media screen and (min-width: 1483px) and (max-width: 1552px) {
  .vision-view-item:nth-child(11),
  .vision-view-item:nth-child(20n + 31) {
    grid-column: 2 / span 2;
  }
}
@media screen and (min-width: 1553px) and (max-width: 1622px) {
  .vision-view-item:nth-child(12),
  .vision-view-item:nth-child(21n + 33) {
    grid-column: 2 / span 2;
  }
}
@media screen and (min-width: 1623px) and (max-width: 1692px) {
  .vision-view-item:nth-child(12),
  .vision-view-item:nth-child(22n + 34) {
    grid-column: 2 / span 2;
  }
}
@media screen and (min-width: 1693px) and (max-width: 1762px) {
  .vision-view-item:nth-child(13),
  .vision-view-item:nth-child(23n + 36) {
    grid-column: 2 / span 2;
  }
}
@media screen and (min-width: 1763px) and (max-width: 1832px) {
  .vision-view-item:nth-child(13),
  .vision-view-item:nth-child(24n + 37) {
    grid-column: 2 / span 2;
  }
}
@media screen and (min-width: 1833px) and (max-width: 1902px) {
  .vision-view-item:nth-child(14),
  .vision-view-item:nth-child(25n + 39) {
    grid-column: 2 / span 2;
  }
}
@media screen and (min-width: 1903px) and (max-width: 1972px) {
  .vision-view-item:nth-child(14),
  .vision-view-item:nth-child(26n + 40) {
    grid-column: 2 / span 2;
  }
}
@media screen and (min-width: 1973px) and (max-width: 2042px) {
  .vision-view-item:nth-child(15),
  .vision-view-item:nth-child(27n + 42) {
    grid-column: 2 / span 2;
  }
}
.vision-view-item::after {
  content: '🐝';
  position: absolute;
  font-style: normal;
  font-size: 70px;
  transform: rotate(90deg);
  left: -63%;
  transition: left 300ms, bottom 300ms, right 300ms, top 300ms;
  text-shadow: 8px -3px 5px black;
}
.vision-view-item:hover:after {
  left: -20%;
}
.vision-view-item:nth-child(2n)::after {
  transform: rotate(180deg);
  left: unset;
  top: -63%;
}
.vision-view-item:nth-child(2n):hover:after {
  top: -20%;
  bottom: unset;
}
.vision-view-item:nth-child(3n)::after {
  transform: rotate(-90deg);
  left: unset;
  top: unset;
  right: -63%;
}
.vision-view-item:nth-child(3n):hover:after {
  right: -20%;
  bottom: unset;
  top: unset;
}
.vision-view-item:nth-child(4n)::after {
  transform: rotate(0deg);
  left: unset;
  top: unset;
  right: unset;
  bottom: -63%;
}
.vision-view-item:nth-child(4n):hover:after {
  left: unset;
  top: unset;
  right: unset;
  bottom: -20%;
}
</style>
