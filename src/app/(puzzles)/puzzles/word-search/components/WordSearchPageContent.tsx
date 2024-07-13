'use client'

import { useEffect, useRef, useState } from 'react'

import { usePDF } from '@react-pdf/renderer'
import { Direction, WordSearch } from 'app/(puzzles)/puzzles/utils/WordSearch'
import { Game, WordSearchState } from 'app/(puzzles)/puzzles/word-search/WordSearch.types'
import { WordSearchForm } from 'app/(puzzles)/puzzles/word-search/components/WordSearchForm'
import { WordSearchPdf } from 'app/(puzzles)/puzzles/word-search/components/WordSearchPdf'
import { Box, Button, Flex, Input, Stack, Text } from 'components/ui'
import { Checkbox } from 'components/ui/Checkbox/Checkbox'

const quotesData = {
  opportunity: {
    id: 'a340853c-78cd-4e50-b053-21ddb1f798be',
    lobsConfig: [
      {
        id: 'a340853c-78cd-4e50-b053-21ddb1f798be_67b48b38-21f5-4cac-9aec-3fd66ceb599b',
        lob: {
          compoundId: '67b48b38-21f5-4cac-9aec-3fd66ceb599b',
          isPackage: false,
          uuid: '67b48b38-21f5-4cac-9aec-3fd66ceb599b',
          name: "Workers' Compensation",
          __typename: 'MonolineLob',
        },
        markets: [
          {
            id: 'ee73df26-2b10-4443-9536-7c1e57162a55_mc',
            market: {
              __typename: 'Broker',
              broker: null,
              name: 'Contract Surety',
              uuid: 'acd7fa6c-cd27-4c96-ba94-101195cd288f',
            },
            status: 'DECLINED',
            forms: [
              {
                title: 'ACORD 125 - Commercial Insurance Application',
                uuid: '80e33016-93e4-4204-a125-ae9dde7ea142',
                __typename: 'Form',
              },
              {
                title: 'ACORD 126 - Commercial General Liability Section',
                uuid: 'cf873672-3cfc-4283-b1e4-e814de0bc2a6',
                __typename: 'Form',
              },
            ],
            quotes: [
              {
                id: 'ee73df26-2b10-4443-9536-7c1e57162a55',
                description: null,
                premium: null,
                status: 'DECLINED',
                lob: {
                  uuid: '67b48b38-21f5-4cac-9aec-3fd66ceb599b',
                  name: "Workers' Compensation",
                  isPackage: false,
                  __typename: 'MonolineLob',
                },
                marketConfig: {
                  market: {
                    broker: null,
                    name: 'Contract Surety',
                    uuid: 'acd7fa6c-cd27-4c96-ba94-101195cd288f',
                    __typename: 'Broker',
                  },
                  __typename: 'MarketConfig',
                },
                parentCarrier: null,
                issuingCarrier: null,
                quoteNumber: null,
                taxes: null,
                fees: null,
                isAdmitted: true,
                billingType: null,
                effectiveDate: null,
                endDate: null,
                coverages: [],
                agencyCode: null,
                renewal: {
                  autoRenew: false,
                  __typename: 'QuoteRenewal',
                },
                quoteType: 'NEW_BUSINESS',
                __typename: 'Quote',
              },
            ],
            __typename: 'MarketConfig',
          },
          {
            id: '7dc85f58-39ad-4222-ada3-9ef2dc38b06a_mc',
            market: {
              __typename: 'Carrier',
              name: 'China Pacific Property Insurance Co Ltd',
              uuid: 'ecc36414-f39d-48e5-9e26-1c134722d1f9',
            },
            status: 'ACTIVE',
            forms: [],
            quotes: [
              {
                id: '7dc85f58-39ad-4222-ada3-9ef2dc38b06a',
                description: null,
                premium: null,
                status: 'NEED_MORE_INFO',
                lob: {
                  uuid: '67b48b38-21f5-4cac-9aec-3fd66ceb599b',
                  name: "Workers' Compensation",
                  isPackage: false,
                  __typename: 'MonolineLob',
                },
                marketConfig: {
                  market: {
                    name: 'China Pacific Property Insurance Co Ltd',
                    uuid: 'ecc36414-f39d-48e5-9e26-1c134722d1f9',
                    __typename: 'Carrier',
                  },
                  __typename: 'MarketConfig',
                },
                parentCarrier: {
                  uuid: 'ecc36414-f39d-48e5-9e26-1c134722d1f9',
                  name: 'China Pacific Property Insurance Co Ltd',
                  __typename: 'Carrier',
                },
                issuingCarrier: null,
                quoteNumber: null,
                taxes: null,
                fees: null,
                isAdmitted: true,
                billingType: null,
                effectiveDate: null,
                endDate: null,
                coverages: [],
                agencyCode: null,
                renewal: {
                  autoRenew: false,
                  __typename: 'QuoteRenewal',
                },
                quoteType: 'NEW_BUSINESS',
                __typename: 'Quote',
              },
            ],
            __typename: 'MarketConfig',
          },
        ],
        __typename: 'LobConfig',
      },
      {
        id: 'a340853c-78cd-4e50-b053-21ddb1f798be_6b137bd4-beb0-46df-8459-55cc8788ffec',
        lob: {
          compoundId: '6b137bd4-beb0-46df-8459-55cc8788ffec',
          isPackage: false,
          uuid: '6b137bd4-beb0-46df-8459-55cc8788ffec',
          name: 'Aviation/Aircraft Liability & Hull Cover',
          __typename: 'MonolineLob',
        },
        markets: [
          {
            id: '1920a453-a859-466f-b5e0-b545404c8454_mc',
            market: {
              __typename: 'Broker',
              broker: 'test@asier.com',
              name: 'Aon Global Power',
              uuid: '07f0ea06-34e9-45c1-b007-6dfdff69a6ef',
            },
            status: 'ACTIVE',
            forms: [],
            quotes: [
              {
                id: '1920a453-a859-466f-b5e0-b545404c8454',
                description: 'My test quote description',
                premium: 23232,
                status: 'QUOTED',
                lob: {
                  uuid: '6b137bd4-beb0-46df-8459-55cc8788ffec',
                  name: 'Aviation/Aircraft Liability & Hull Cover',
                  isPackage: false,
                  __typename: 'MonolineLob',
                },
                marketConfig: {
                  market: {
                    broker: 'test@asier.com',
                    name: 'Aon Global Power',
                    uuid: '07f0ea06-34e9-45c1-b007-6dfdff69a6ef',
                    __typename: 'Broker',
                  },
                  __typename: 'MarketConfig',
                },
                parentCarrier: {
                  uuid: '4df26a9d-70f1-4711-93fd-4569cf36c0e1',
                  name: 'ACUITY, A Mutual Insurance Company',
                  __typename: 'Carrier',
                },
                issuingCarrier: {
                  uuid: '643976ac-eb3c-471a-99b1-a40a557bd568',
                  name: 'ACUITY, A Mutual Insurance Company',
                  __typename: 'Carrier',
                },
                quoteNumber: 'ext quote number',
                taxes: 20,
                fees: 23,
                isAdmitted: true,
                billingType: 'AGENCY_BILL',
                effectiveDate: '2001-01-01T00:00:00Z',
                endDate: '2002-01-01T00:00:00Z',
                coverages: [],
                agencyCode: null,
                renewal: {
                  autoRenew: false,
                  __typename: 'QuoteRenewal',
                },
                quoteType: 'NEW_BUSINESS',
                __typename: 'Quote',
              },
            ],
            __typename: 'MarketConfig',
          },
          {
            id: '4fe515b5-25da-467a-b9f5-7a593363b0e0_mc',
            market: {
              __typename: 'Carrier',
              name: 'Zurich American Ins Co',
              uuid: '7d4a407b-70a4-4eb3-bd27-06362be7be94',
            },
            status: 'ACTIVE',
            forms: [],
            quotes: [
              {
                id: '4fe515b5-25da-467a-b9f5-7a593363b0e0',
                description: '23322323',
                premium: 33300,
                status: 'QUOTED',
                lob: {
                  uuid: '6b137bd4-beb0-46df-8459-55cc8788ffec',
                  name: 'Aviation/Aircraft Liability & Hull Cover',
                  isPackage: false,
                  __typename: 'MonolineLob',
                },
                marketConfig: {
                  market: {
                    name: 'Zurich American Ins Co',
                    uuid: '7d4a407b-70a4-4eb3-bd27-06362be7be94',
                    __typename: 'Carrier',
                  },
                  __typename: 'MarketConfig',
                },
                parentCarrier: {
                  uuid: '7d4a407b-70a4-4eb3-bd27-06362be7be94',
                  name: 'Zurich American Ins Co',
                  __typename: 'Carrier',
                },
                issuingCarrier: {
                  uuid: '45eb5029-907d-4220-8fef-8a2e5319ee3b',
                  name: 'Zurich American Ins Co',
                  __typename: 'Carrier',
                },
                quoteNumber: null,
                taxes: 0,
                fees: 0,
                isAdmitted: true,
                billingType: null,
                effectiveDate: null,
                endDate: null,
                coverages: [],
                agencyCode: null,
                renewal: {
                  autoRenew: false,
                  __typename: 'QuoteRenewal',
                },
                quoteType: 'NEW_BUSINESS',
                __typename: 'Quote',
              },
            ],
            __typename: 'MarketConfig',
          },
        ],
        __typename: 'LobConfig',
      },
      {
        id: 'a340853c-78cd-4e50-b053-21ddb1f798be_7c7624b6-c098-4229-bf77-7c62b861b559',
        lob: {
          compoundId: '7c7624b6-c098-4229-bf77-7c62b861b559',
          isPackage: false,
          uuid: '7c7624b6-c098-4229-bf77-7c62b861b559',
          name: 'Business Interruption',
          __typename: 'MonolineLob',
        },
        markets: [
          {
            id: '8b72d23c-4c62-4509-917b-b0010a913839_mc',
            market: {
              __typename: 'Carrier',
              name: 'Zurich Insurance Europe AG',
              uuid: 'be3b9512-fa2c-4560-9e30-72f89def85a0',
            },
            status: 'ACTIVE',
            forms: [
              {
                title: 'ACORD 125 - Commercial Insurance Application',
                uuid: '80e33016-93e4-4204-a125-ae9dde7ea142',
                __typename: 'Form',
              },
            ],
            quotes: [
              {
                id: '8b72d23c-4c62-4509-917b-b0010a913839',
                description: 'Hola',
                premium: 234400,
                status: 'QUOTED',
                lob: {
                  uuid: '7c7624b6-c098-4229-bf77-7c62b861b559',
                  name: 'Business Interruption',
                  isPackage: false,
                  __typename: 'MonolineLob',
                },
                marketConfig: {
                  market: {
                    name: 'Zurich Insurance Europe AG',
                    uuid: 'be3b9512-fa2c-4560-9e30-72f89def85a0',
                    __typename: 'Carrier',
                  },
                  __typename: 'MarketConfig',
                },
                parentCarrier: {
                  uuid: 'be3b9512-fa2c-4560-9e30-72f89def85a0',
                  name: 'Zurich Insurance Europe AG',
                  __typename: 'Carrier',
                },
                issuingCarrier: {
                  uuid: 'fb637e39-0763-4e57-87eb-e6b126e5d251',
                  name: 'Zurich Insurance Europe AG',
                  __typename: 'Carrier',
                },
                quoteNumber: null,
                taxes: 0,
                fees: 0,
                isAdmitted: true,
                billingType: null,
                effectiveDate: null,
                endDate: null,
                coverages: [],
                agencyCode: null,
                renewal: {
                  autoRenew: false,
                  __typename: 'QuoteRenewal',
                },
                quoteType: 'NEW_BUSINESS',
                __typename: 'Quote',
              },
            ],
            __typename: 'MarketConfig',
          },
          {
            id: '11e25741-937a-4727-be5d-4a57d451adb4_mc',
            market: {
              __typename: 'Carrier',
              name: 'Zurich North America',
              uuid: 'f81132d6-4a6a-4033-917c-bc7a8fb1154b',
            },
            status: 'ACTIVE',
            forms: [],
            quotes: [
              {
                id: '11e25741-937a-4727-be5d-4a57d451adb4',
                description: null,
                premium: null,
                status: 'NEED_MORE_INFO',
                lob: {
                  uuid: '7c7624b6-c098-4229-bf77-7c62b861b559',
                  name: 'Business Interruption',
                  isPackage: false,
                  __typename: 'MonolineLob',
                },
                marketConfig: {
                  market: {
                    name: 'Zurich North America',
                    uuid: 'f81132d6-4a6a-4033-917c-bc7a8fb1154b',
                    __typename: 'Carrier',
                  },
                  __typename: 'MarketConfig',
                },
                parentCarrier: {
                  uuid: 'f81132d6-4a6a-4033-917c-bc7a8fb1154b',
                  name: 'Zurich North America',
                  __typename: 'Carrier',
                },
                issuingCarrier: null,
                quoteNumber: null,
                taxes: null,
                fees: null,
                isAdmitted: true,
                billingType: null,
                effectiveDate: null,
                endDate: null,
                coverages: [],
                agencyCode: null,
                renewal: {
                  autoRenew: false,
                  __typename: 'QuoteRenewal',
                },
                quoteType: 'NEW_BUSINESS',
                __typename: 'Quote',
              },
            ],
            __typename: 'MarketConfig',
          },
        ],
        __typename: 'LobConfig',
      },
      {
        id: 'a340853c-78cd-4e50-b053-21ddb1f798be_d3113a43-4b19-48d9-9d59-d6190505200b',
        lob: {
          compoundId: 'd3113a43-4b19-48d9-9d59-d6190505200b',
          isPackage: false,
          uuid: 'd3113a43-4b19-48d9-9d59-d6190505200b',
          name: 'Cargo Legal Liability - Marine',
          __typename: 'MonolineLob',
        },
        markets: [],
        __typename: 'LobConfig',
      },
      {
        id: 'a340853c-78cd-4e50-b053-21ddb1f798be_9bcc4895-1f50-49b6-b2cd-e23b3893b5a5',
        lob: {
          compoundId: '9bcc4895-1f50-49b6-b2cd-e23b3893b5a5',
          isPackage: false,
          uuid: '9bcc4895-1f50-49b6-b2cd-e23b3893b5a5',
          name: 'Blanket Accident',
          __typename: 'MonolineLob',
        },
        markets: [],
        __typename: 'LobConfig',
      },
      {
        id: 'a340853c-78cd-4e50-b053-21ddb1f798be_0fe63422-cbbf-4885-a276-939326892504',
        lob: {
          compoundId: '0fe63422-cbbf-4885-a276-939326892504',
          isPackage: false,
          uuid: '0fe63422-cbbf-4885-a276-939326892504',
          name: 'Aircraft Liab-Hull Cover Fixed Wing',
          __typename: 'MonolineLob',
        },
        markets: [],
        __typename: 'LobConfig',
      },
      {
        id: 'a340853c-78cd-4e50-b053-21ddb1f798be_f1011719-bc3a-4b87-8d79-a6e60fb5fd08',
        lob: {
          compoundId: 'f1011719-bc3a-4b87-8d79-a6e60fb5fd08',
          isPackage: false,
          uuid: 'f1011719-bc3a-4b87-8d79-a6e60fb5fd08',
          name: 'Advantage Boiler & Machinery',
          __typename: 'MonolineLob',
        },
        markets: [],
        __typename: 'LobConfig',
      },
      {
        id: 'a340853c-78cd-4e50-b053-21ddb1f798be_54a2bec9-df96-4ee9-a740-cc68d5322d65',
        lob: {
          compoundId: '54a2bec9-df96-4ee9-a740-cc68d5322d65',
          isPackage: false,
          uuid: '54a2bec9-df96-4ee9-a740-cc68d5322d65',
          name: 'Control of Well',
          __typename: 'MonolineLob',
        },
        markets: [],
        __typename: 'LobConfig',
      },
      {
        id: 'a340853c-78cd-4e50-b053-21ddb1f798be_f01090d7-980c-45a9-9472-5b048ce27620',
        lob: {
          compoundId: 'f01090d7-980c-45a9-9472-5b048ce27620',
          isPackage: false,
          uuid: 'f01090d7-980c-45a9-9472-5b048ce27620',
          name: 'Aviation/Aircraft Hull Coverage',
          __typename: 'MonolineLob',
        },
        markets: [
          {
            id: '55a3d43f-44eb-4bc5-98d7-b3e0ea6e13e4_mc',
            market: {
              __typename: 'Carrier',
              name: 'Zurich Insurance Europe AG',
              uuid: 'be3b9512-fa2c-4560-9e30-72f89def85a0',
            },
            status: 'ACTIVE',
            forms: [],
            quotes: [
              {
                id: '55a3d43f-44eb-4bc5-98d7-b3e0ea6e13e4',
                description: null,
                premium: 323200,
                status: 'QUOTED',
                lob: {
                  uuid: 'f01090d7-980c-45a9-9472-5b048ce27620',
                  name: 'Aviation/Aircraft Hull Coverage',
                  isPackage: false,
                  __typename: 'MonolineLob',
                },
                marketConfig: {
                  market: {
                    name: 'Zurich Insurance Europe AG',
                    uuid: 'be3b9512-fa2c-4560-9e30-72f89def85a0',
                    __typename: 'Carrier',
                  },
                  __typename: 'MarketConfig',
                },
                parentCarrier: {
                  uuid: 'be3b9512-fa2c-4560-9e30-72f89def85a0',
                  name: 'Zurich Insurance Europe AG',
                  __typename: 'Carrier',
                },
                issuingCarrier: {
                  uuid: 'fb637e39-0763-4e57-87eb-e6b126e5d251',
                  name: 'Zurich Insurance Europe AG',
                  __typename: 'Carrier',
                },
                quoteNumber: null,
                taxes: 0,
                fees: 0,
                isAdmitted: true,
                billingType: null,
                effectiveDate: null,
                endDate: null,
                coverages: [],
                agencyCode: null,
                renewal: {
                  autoRenew: false,
                  __typename: 'QuoteRenewal',
                },
                quoteType: 'NEW_BUSINESS',
                __typename: 'Quote',
              },
            ],
            __typename: 'MarketConfig',
          },
        ],
        __typename: 'LobConfig',
      },
      {
        id: 'a340853c-78cd-4e50-b053-21ddb1f798be_cd075c1a-14e1-4a94-8537-79ee92699579',
        lob: {
          compoundId: 'cd075c1a-14e1-4a94-8537-79ee92699579',
          isPackage: false,
          uuid: 'cd075c1a-14e1-4a94-8537-79ee92699579',
          name: 'Bailee Coverage',
          __typename: 'MonolineLob',
        },
        markets: [],
        __typename: 'LobConfig',
      },
      {
        id: 'a340853c-78cd-4e50-b053-21ddb1f798be_28a551ed-2da2-46f1-addc-0ea7953d5a5d',
        lob: {
          compoundId: '28a551ed-2da2-46f1-addc-0ea7953d5a5d',
          isPackage: false,
          uuid: '28a551ed-2da2-46f1-addc-0ea7953d5a5d',
          name: 'Airport Liability',
          __typename: 'MonolineLob',
        },
        markets: [],
        __typename: 'LobConfig',
      },
      {
        id: 'a340853c-78cd-4e50-b053-21ddb1f798be_b8164033-42d6-4149-a04b-0d6b23e78af4',
        lob: {
          compoundId: 'b8164033-42d6-4149-a04b-0d6b23e78af4',
          isPackage: false,
          uuid: 'b8164033-42d6-4149-a04b-0d6b23e78af4',
          name: 'Hull and Machinery Coverage - Marine',
          __typename: 'MonolineLob',
        },
        markets: [],
        __typename: 'LobConfig',
      },
    ],
    quotes: [
      {
        id: 'ee73df26-2b10-4443-9536-7c1e57162a55',
        __typename: 'Quote',
      },
      {
        id: '8b72d23c-4c62-4509-917b-b0010a913839',
        __typename: 'Quote',
      },
      {
        id: '1920a453-a859-466f-b5e0-b545404c8454',
        __typename: 'Quote',
      },
      {
        id: '4fe515b5-25da-467a-b9f5-7a593363b0e0',
        __typename: 'Quote',
      },
      {
        id: '55a3d43f-44eb-4bc5-98d7-b3e0ea6e13e4',
        __typename: 'Quote',
      },
      {
        id: '11e25741-937a-4727-be5d-4a57d451adb4',
        __typename: 'Quote',
      },
      {
        id: '7dc85f58-39ad-4222-ada3-9ef2dc38b06a',
        __typename: 'Quote',
      },
      {
        id: '54b9fe1e-164e-4df7-a1d4-af7c16e212d6',
        __typename: 'Quote',
      },
    ],
    __typename: 'Opportunity',
  },
}

const DIRECTIONS: Array<{ label: string; value: Direction }> = [
  {
    label: 'Horizontal',
    value: 'horizontal',
  },
  {
    value: 'vertical',
    label: 'Vertical',
  },
  {
    label: 'Diagonal',
    value: 'diagonal',
  },
  {
    value: 'diagonalReverse',
    label: 'Diagonal reverse',
  },
  {
    value: 'horizontal_rtl',
    label: 'Horizontal left to right',
  },
  {
    value: 'vertical_btt',
    label: 'Vertical bottom to top',
  },
  {
    value: 'diagonal_btt',
    label: 'Diagonal bottom to top',
  },
  {
    label: 'Diagonal reverse bottom to top',
    value: 'diagonalReverse_btt',
  },
]

export const WordSearchPageContent = () => {
  const gridSizeRef = useRef<HTMLInputElement>(null)

  const [themes, setThemes] = useState<WordSearchState[]>([])
  const [games, setGames] = useState<Game[]>([])
  const [directions, setDirections] = useState<Direction[]>([])
  const [instance, updateInstance] = usePDF({ document: <WordSearchPdf games={games} /> })
  const generatePuzzles = (e: any) => {
    e.preventDefault()
    const gridSize = parseInt(gridSizeRef.current?.value || '30')
    const wsGames: Game[] = []
    themes.forEach((theme) => {
      const wordSearch = new WordSearch(theme.words, gridSize, directions)
      const game = wordSearch.makeGrid()
      wsGames.push({ theme, ...game })
    })
    setGames(wsGames)
  }

  useEffect(() => {
    if (games.length) {
      updateInstance(<WordSearchPdf games={games} />)
    }
  }, [games])

  const addNewTheme = () => {
    setThemes((prev) => {
      return [
        ...prev,
        {
          id: Math.random(),
          theme: '',
          words: [],
        },
      ]
    })
  }

  const removeAll = () => {
    localStorage.removeItem('ws-games')
    setGames([])
    setThemes([])
  }

  const removeTheme = (id: number) => {
    const newThemes = themes.filter((t) => {
      return id !== t.id
    })
    setThemes(newThemes)
  }

  useEffect(() => {
    const storedThemes = localStorage.getItem('ws-games')
    if (storedThemes) {
      setThemes(JSON.parse(storedThemes))
    }
  }, [])

  const saveTheme = (theme: WordSearchState, index: number) => {
    const newThemes = [...themes]
    newThemes[index] = theme
    localStorage.setItem('ws-games', JSON.stringify(newThemes))
    setThemes(newThemes)
  }

  const changeDirections = (isChecked: boolean, direction: Direction) => {
    if (isChecked) {
      setDirections((prev) => [...prev, direction])
    } else {
      setDirections((prev) => prev.filter((dir) => dir !== direction))
    }
  }

  return (
    <Box padding={['spacing120', 'spacing0', 'spacing0']}>
      <Stack gap="spacing24">
        <Text as="h2" type="heading2">
          Word Search
        </Text>
        <Flex align="end" gap="spacing24" template={[1, 1, 1]}>
          <Box>
            <Input ref={gridSizeRef} label="Grid Size" type="text" />
          </Box>
          <Box>
            <Button width="100%" type="button" onClick={generatePuzzles}>
              Generate puzzles
            </Button>
          </Box>
          <Box>
            <Button width="100%" target="_blank" as="a" href={instance.url || undefined} disabled={instance.loading}>
              {instance.loading ? 'Loading...' : 'Download PDF'}
            </Button>
          </Box>
        </Flex>
        <Flex gap="spacing24" wrap="wrap">
          {DIRECTIONS.map((dir) => {
            return (
              <Checkbox
                onChange={(checked) => changeDirections(checked, dir.value)}
                name="directions"
                id={dir.value}
                key={dir.value}
              >
                {dir.label}
              </Checkbox>
            )
          })}
        </Flex>
        <Flex gap="spacing24" template={[1, 1]}>
          <Button onClick={addNewTheme}>Add new theme</Button>
          <Button onClick={removeAll}>Remove all</Button>
        </Flex>
        <Flex template={[1, 1, 1]} wrap="wrap" gap="spacing12">
          {themes.map((theme, index) => {
            return (
              <WordSearchForm
                key={theme.id}
                onRemove={() => removeTheme(theme.id)}
                themes={themes}
                themeId={theme.id}
                onSave={(t) => saveTheme({ ...t, id: theme.id }, index)}
              />
            )
          })}
        </Flex>
      </Stack>
    </Box>
  )
}
