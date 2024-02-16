(() => {
  const baseIconUrl = './assets/svg';
  const links = [
    {
      icon: 'Settings.svg',
      name: '设置',
    },
    {
      icon: 'AppStore.svg',
      name: 'AppStore',
    },
    {
      icon: 'Downloads.svg',
      name: '下载',
    },
    {
      icon: 'Emby.svg',
      name: 'AppStore',
    },
    {
      icon: 'Downloads-1.svg',
      name: 'AppStore',
    },
    {
      icon: 'Plex.svg',
      name: 'AppStore',
    },
    {
      icon: 'Downloads-3.svg',
      name: 'AppStore',
    },
    {
      icon: 'Nginx-1.svg',
      name: 'AppStore',
    },
    {
      icon: 'Downloads-2.svg',
      name: 'AppStore',
    },
    {
      icon: 'AppStore.svg',
      name: 'AppStore',
    },
    {
      icon: 'Emby.svg',
      name: 'AppStore',
    },
    {
      icon: 'AppStore.svg',
      name: 'AppStore',
    },
  ];

  window.links = links.map((item) => {
    item.icon = `${baseIconUrl}/${item.icon}`;

    return item;
  });
})();
