const vaccineLocationOneAvailability = {
  name: "Regent Park 40 Oaks",
  phone: "1 888 385 1910",
  notes: undefined,
  active: 1,
  postcode: "M5A2C6",
  url:
    "https://uht-public.vertoengage.com/engage/generic-open-clinic?key=b6f65518-d5bc-4113-b7ed-ee33f7574929",
  tags: undefined,
  id: 1,
  organization: {
    fullName: "Verto",
    shortName: "Verto",
    description: "Toronto Hospitals",
    url: "https://vaccineto.ca/api/slots",
    id: 1,
    createdAt: "2021-05-02T03:20:59.077000",
  },
  address: {
    line1: "40 Oak Street",
    line2: "",
    city: "Toronto",
    province: "Ontario",
    postcode: "M5A2C6",
    id: 4,
    createdAt: "2021-05-02T23:50:40.267000",
  },
  createdAt: "2021-05-02T03:20:59.077000",
  vaccineAvailabilities: [
    {
      numberAvailable: 5,
      numberTotal: 5,
      vaccine: 1,
      inputType: 1,
      tags: undefined,
      id: "dce1a460-2868-407d-8b74-04808cf1d55d",
      location: 1,
      createdAt: "2021-05-06T00:00:03.120000",
      date: "2021-05-08T04:00:00+00:00",
      timeslots: [],
      requirements: [
        {
          id: "0d114a64-9c09-48a3-927f-8b2d46a21feb",
          vaccineAvailability: "dce1a460-2868-407d-8b74-04808cf1d55d",
          requirement: 1,
          active: true,
          createdAt: "2021-05-02T05:40:44.407000",
        },
      ],
    },
  ],
};

const vaccineLocationMultipleAvailabilities = {
  name: "St. James Town Wellesley Community Centre (WCC)",
  phone: "1 888 385 1911",
  notes: undefined,
  active: 1,
  postcode: "M4X1K7",
  url:
    "https://uht-public.vertoengage.com/engage/generic-open-clinic?key=b6f65518-d5bc-4113-b7ed-ee33f7574929",
  tags: undefined,
  id: 2,
  organization: {
    fullName: "Verto",
    shortName: "Verto",
    description: "Toronto Hospitals",
    url: "https://vaccineto.ca/api/slots",
    id: 1,
    createdAt: "2021-05-02T03:20:59.077000",
  },
  address: {
    line1: "495 Sherbourne Street",
    line2: undefined,
    city: "Toronto",
    province: "Ontario",
    postcode: "M4X1K7",
    id: 5,
    createdAt: "2021-05-02T23:54:40.023000",
  },
  createdAt: "2021-05-02T03:20:59.077000",
  vaccineAvailabilities: [
    {
      numberAvailable: 5,
      numberTotal: 5,
      vaccine: 1,
      inputType: 1,
      tags: undefined,
      id: "94bd5a16-0ae4-4d8e-bcf2-03f1898f9d71",
      location: 2,
      createdAt: "2021-05-06T00:00:04.797000",
      date: "2021-05-08T04:00:00+00:00",
      timeslots: [],
      requirements: [
        {
          id: "ec5c8566-aa4c-4d19-8d27-b8b19b0259e6",
          vaccineAvailability: "94bd5a16-0ae4-4d8e-bcf2-03f1898f9d71",
          requirement: 4,
          active: true,
          createdAt: "2021-05-02T05:40:47.683000",
        },
      ],
    },
    {
      numberAvailable: 6,
      numberTotal: 6,
      vaccine: 1,
      inputType: 1,
      tags: undefined,
      id: "3133fffb-a875-4184-957f-e69f761fd83c",
      location: 2,
      createdAt: "2021-05-06T00:00:05.600000",
      date: "2021-05-09T04:00:00+00:00",
      timeslots: [],
      requirements: [
        {
          id: "19ae9c2f-89be-4f7a-81ae-d4f035251882",
          vaccineAvailability: "3133fffb-a875-4184-957f-e69f761fd83c",
          requirement: 2,
          active: true,
          createdAt: "2021-05-02T05:40:49.310000",
        },
      ],
    },
    {
      numberAvailable: 7,
      numberTotal: 7,
      vaccine: 1,
      inputType: 1,
      tags: undefined,
      id: "a5585900-1201-4364-a845-fe87003ff0dc",
      location: 2,
      createdAt: "2021-05-06T00:00:08.083000",
      date: "2021-05-10T04:00:00+00:00",
      timeslots: [],
      requirements: [
        {
          id: "c9b54d5a-eaaf-4611-a7fa-035d39e80b41",
          vaccineAvailability: "a5585900-1201-4364-a845-fe87003ff0dc",
          requirement: 3,
          active: true,
          createdAt: "2021-05-02T05:40:54.240000",
        },
      ],
    },
  ],
};

const vaccineLocationNoAvailabilities = {
  name: "Ryerson University",
  phone: "1 888 385 1912",
  notes: undefined,
  active: 1,
  postcode: "M5B1Z5",
  url:
    "https://uht-public.vertoengage.com/engage/generic-open-clinic?key=b6f65518-d5bc-4113-b7ed-ee33f7574929",
  tags: undefined,
  id: 3,
  organization: {
    fullName: "Verto",
    shortName: "Verto",
    description: "Toronto Hospitals",
    url: "https://vaccineto.ca/api/slots",
    id: 1,
    createdAt: "2021-05-02T03:20:59.077000",
  },
  address: {
    line1: "288 Church Street",
    line2: undefined,
    city: "Toronto",
    province: "Ontario",
    postcode: "M5B1Z5",
    id: 6,
    createdAt: "2021-05-02T23:55:57.970000",
  },
  createdAt: "2021-05-02T03:20:59.077000",
  vaccineAvailabilities: [],
};

const vaccineLocationsZeroValueAvailability = {
  name: "Community Hub Place",
  phone: "1-888-385-1913",
  notes: undefined,
  active: 1,
  postcode: "M6M2J5",
  url: "http://www.wpcovidclinic.org/",
  tags: undefined,
  id: 7,
  organization: {
    fullName: "Verto",
    shortName: "Verto",
    description: "Toronto Hospitals",
    url: "https://vaccineto.ca/api/slots",
    id: 1,
    createdAt: "2021-05-02T03:20:59.077000+00:00",
  },
  address: {
    line1: "82 Buttonwood Avenue",
    line2: undefined,
    city: "Toronto",
    province: "Ontario",
    postcode: "M6M2J5",
    id: 9,
    createdAt: "2021-05-03T00:03:07.590000+00:00",
  },
  createdAt: "2021-05-02T03:26:02.200000+00:00",
  vaccineAvailabilities: [
    {
      numberAvailable: 0,
      numberTotal: 0,
      vaccine: 1,
      inputType: 1,
      tags: undefined,
      id: "646f1dea-1831-4e47-a700-1b9bd6bb8496",
      location: 7,
      createdAt: "2021-05-06T00:00:26.487000+00:00",
      date: "2021-05-11T04:00:00+00:00",
      timeslots: [],
      requirements: [
        {
          id: "cd35d56c-ce27-4c94-bec2-748e4ff7a089",
          vaccineAvailability: "646f1dea-1831-4e47-a700-1b9bd6bb8496",
          requirement: 3,
          active: true,
          name: "Healthcare Workers",
          description: "Healthcare Workers and Community Providers",
          createdAt: "2021-05-02T05:41:30.693000+00:00",
        },
      ],
    },
  ],
};

const vaccineLocationsMixedAvailabilities = {
  name: "St. Michael’s Hospital",
  phone: "1-888-385-1914",
  notes: undefined,
  active: 1,
  postcode: "M5B1W8",
  url: "https://uht-public.vertoengage.com/",
  tags: undefined,
  id: 4,
  organization: {
    fullName: "Verto",
    shortName: "Verto",
    description: "Toronto Hospitals",
    url: "https://vaccineto.ca/api/slots",
    id: 1,
    createdAt: "2021-05-02T03:20:59.077000+00:00",
  },
  address: {
    line1: "36 Queen Street East",
    line2: undefined,
    city: "Toronto",
    province: "Ontario",
    postcode: "M5B1W8",
    id: 7,
    createdAt: "2021-05-02T23:56:52.737000+00:00",
  },
  createdAt: "2021-05-02T03:25:13.137000+00:00",
  vaccineAvailabilities: [
    {
      numberAvailable: 0,
      numberTotal: 0,
      vaccine: 1,
      inputType: 1,
      tags: undefined,
      id: "0b18327c-cc2e-4b27-9a4f-11e826418e42",
      location: 4,
      createdAt: "2021-05-06T00:00:11.653000+00:00",
      date: "2021-05-11T04:00:00+00:00",
      timeslots: [],
      requirements: [
        {
          id: "ab896245-7a11-49e0-a343-5e67f14bc271",
          vaccineAvailability: "0b18327c-cc2e-4b27-9a4f-11e826418e42",
          requirement: 2,
          active: true,
          name: "Medical Conditions",
          description:
            "Organ Transplant Recipients and Individuals Receiving Active Cancer Treatment",
          createdAt: "2021-05-02T05:41:01.310000+00:00",
        },
      ],
    },
    {
      numberAvailable: 3,
      numberTotal: 3,
      vaccine: 1,
      inputType: 1,
      tags: undefined,
      id: "f5f5e8a8-0dbd-4c0e-927a-22890b9b6609",
      location: 4,
      createdAt: "2021-05-06T00:00:14.957000+00:00",
      date: "2021-05-11T04:00:00+00:00",
      timeslots: [],
      requirements: [
        {
          id: "8de54112-4e5c-476a-bff1-e005d0874e34",
          vaccineAvailability: "f5f5e8a8-0dbd-4c0e-927a-22890b9b6609",
          requirement: 6,
          active: true,
          name: "Caregivers",
          description: "Caregivers",
          createdAt: "2021-05-02T05:41:07.853000+00:00",
        },
      ],
    },
  ],
};

const vaccineLocationResponses = [
  vaccineLocationOneAvailability,
  vaccineLocationMultipleAvailabilities,
  vaccineLocationNoAvailabilities,
  vaccineLocationsZeroValueAvailability,
  vaccineLocationsMixedAvailabilities,
];

export {
  vaccineLocationOneAvailability,
  vaccineLocationMultipleAvailabilities,
  vaccineLocationNoAvailabilities,
  vaccineLocationsZeroValueAvailability,
  vaccineLocationsMixedAvailabilities,
  vaccineLocationResponses,
};
