const genderPrefered = ({ gender }) => {
  if (gender === 'male') {
    return ['female'];
  }
  if (gender === 'female') {
    return ['male'];
  }
  return ['male', 'female'];
};

const distanceSlot = (distance) => {
  if (distance < 10) {
    return 4;
  }
  if (distance < 20) {
    return 3;
  }
  if (distance < 30) {
    return 2;
  }
  if (distance < 50) {
    return 1;
  }
  return 0;
};

export { genderPrefered, distanceSlot };
