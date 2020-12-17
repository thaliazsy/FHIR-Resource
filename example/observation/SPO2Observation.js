﻿var a =
    {
    "resourceType": "Observation",
   
  "identifier": [
    {
        "system": "http://goodcare.org/observation/id",
        "value": "o1223435-10"
    }
  ],
 
  "status": "final",
  "category": [
    {
        "coding": [
          {
              "system": "http://terminology.hl7.org/CodeSystem/observation-category",
              "code": "vital-signs",
              "display": "Vital Signs"
          }
        ],
        "text": "Vital Signs"
    }
  ],
  "code": {
      "coding": [
        {
            "system": "http://loinc.org",
            "code": "2708-6",
            "display": "Oxygen saturation in Arterial blood"
        },
        {
            "system": "http://loinc.org",
            "code": "59408-5",
            "display": "Oxygen saturation in Arterial blood by Pulse oximetry"
        },
        {
            "system": "urn:iso:std:iso:11073:10101",
            "code": "150456",
            "display": "MDC_PULS_OXIM_SAT_O2"
        }
      ]
  },
  "subject": {
      "reference": "Patient/1856173"
  },
  "effectiveDateTime": "2018-12-05T09:30:10+01:00",
  "valueQuantity": {
      "value": 95,
      "unit": "%",
      "system": "http://unitsofmeasure.org",
      "code": "%"
  },
  "interpretation": [
    {
        "coding": [
          {
              "system": "http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation",
              "code": "N",
              "display": "Normal"
          }
        ],
        "text": "Normal (applies to non-numeric results)"
    }
  ],
  "referenceRange": [
    {
        "low": {
            "value": 90,
            "unit": "%",
            "system": "http://unitsofmeasure.org",
            "code": "%"
        },
        "high": {
            "value": 99,
            "unit": "%",
            "system": "http://unitsofmeasure.org",
            "code": "%"
        }
    }
  ]
}