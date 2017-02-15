export default {
  notReviewed: [
    {
      field: 'SUBMISSION_NO',
      columnName: 'No.'
    },
    {
      field: 'RECEIVED_DATE',
      columnName: 'Received',
      format: 'date'
    },
    {
      field: 'INSURED_NAME',
      columnName: 'Client'
    },
    {
      field: 'AGENT_NAME',
      columnName: 'Agent'
    },
    {
      field: 'PROGRAM',
      columnName: 'Program'
    },
    {
      field: 'UNDERWRITER_NAME',
      columnName: 'Underwriter'
    }
  ],
  notQuoted: [
    {
      field: 'SUBMISSION_NO',
      columnName: 'No.'
    },
    {
      field: 'RECEIVED_DATE',
      columnName: 'Received',
      format: 'date'
    },
    {
      field: 'INSURED_NAME',
      columnName: 'Client'
    },
    {
      field: 'AGENT_NAME',
      columnName: 'Agent'
    },
    {
      field: 'PROGRAM',
      columnName: 'Program'
    },
    {
      field: 'UNDERWRITER_NAME',
      columnName: 'Underwriter'
    },
    {
      field: 'REJECTED_DATE',
      columnName: 'Rejected',
      format: 'date'
    },
    {
      field: 'SUB_REJECT_REASON',
      columnName: 'Reason'
    }
  ],
  quoteAccepted: [
    {
      field: 'SUBMISSION_NO',
      columnName: 'No.'
    },
    {
      field: 'RECEIVED_DATE',
      columnName: 'Received',
      format: 'date'
    },
    {
      field: 'INSURED_NAME',
      columnName: 'Client'
    },
    {
      field: 'AGENT_NAME',
      columnName: 'Agent'
    },
    {
      field: 'PROGRAM',
      columnName: 'Program'
    },
    {
      field: 'UNDERWRITER_NAME',
      columnName: 'Underwriter'
    },
    {
      field: 'QUOTED_DATE',
      columnName: 'Quoted',
      format: 'date'
    },
    {
      field: 'QUOTED_PREMIUM',
      columnName: 'Premium',
      format: 'dollar amount'
    },
    {
      field: 'POL_EFF_DT',
      columnName: 'Policy starts',
      format: 'date'
    },
    {
      field: 'POL_EXP_DT',
      columnName: 'Policy expires',
      format: 'date'
    }
  ],
  quoteRejected: [
    {
      field: 'SUBMISSION_NO',
      columnName: 'No.'
    },
    {
      field: 'RECEIVED_DATE',
      columnName: 'Received',
      format: 'date'
    },
    {
      field: 'INSURED_NAME',
      columnName: 'Client'
    },
    {
      field: 'AGENT_NAME',
      columnName: 'Agent'
    },
    {
      field: 'PROGRAM',
      columnName: 'Program'
    },
    {
      field: 'UNDERWRITER_NAME',
      columnName: 'Underwriter'
    },
    {
      field: 'QUOTED_DATE',
      columnName: 'Quoted',
      format: 'date'
    },
    {
      field: 'QUOTED_PREMIUM',
      columnName: 'Premium',
      format: 'dollar amount'
    },
    {
      field: 'REJECTED_DATE',
      columnName: 'Rejected',
      format: 'date'
    },
    {
      field: 'SUB_REJECT_REASON',
      columnName: 'Reason'
    }
  ]
}
