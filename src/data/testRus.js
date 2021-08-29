export default [
  {
    id: 1,
    type: 'CountryComponent',
    order: 1,
    required: true,
  },
  {
    id: 2,
    type: 'RepublicComponent',
    order: 2,
  },
  {
    id: 3,
    type: 'RegionComponent',
    order: 3,
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
    order: 5,
    required: true,
  },
  {
    id: 6,
    type: 'HouseComponent',
    order: 6,
  },
  {
    id: 7,
    type: 'AppartmentComponent',
    order: 7,
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
