export const getMusicCover = async(coverId) => {
  try {
    const banner = await fetch(`https://cms.samespace.com/assets/${coverId}`);
    const bannerData = await banner.blob();
    const songBanner = URL.createObjectURL(bannerData);
    return songBanner;
  } catch (error) {
    return error;
  }
}
