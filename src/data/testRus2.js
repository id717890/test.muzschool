export default [
  {
    id: 1,
    type: 'CountryComponent',
    order: 6,
    required: true,
  },
  {
    id: 3,
    type: 'RegionComponent',
    order: 5,
  },
  {
    id: 4,
    type: 'CityComponent',
    order: 4,
    required: true,
  },
  {
    id: 5,
    type: 'StreatComponent',
    order: 1,
    required: true,
  },
  {
    id: 6,
    type: 'HouseComponent',
    order: 2,
  },
  {
    id: 7,
    type: 'AppartmentComponent',
    order: 3,
    required: true,
  },
  {
    id: 8,
    type: 'PoscodeComponent',
    order: 8,
    required: true,
    isNumber: true,
    minLength: 6,
  },
]
