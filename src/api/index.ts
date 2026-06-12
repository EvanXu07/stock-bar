import type { ConceptBoard, ConceptBoardConstituent, FullQuote, IndustryBoard, IndustryBoardConstituent } from 'stock-sdk'
import { sdk, wrap } from './sdk'

// ========== A 股行情 ==========
export function getStockQuotes(codes: string[]): Promise<FullQuote[]> {
  return wrap(() => sdk.getFullQuotes(codes), '批量股票行情')
}

// ========== 行业板块 ==========

export function getIndustryBoards(): Promise<IndustryBoard[]> {
  return wrap(() => sdk.getIndustryList(), '行业板块列表')
}

export function getIndustryConstituents(symbol: string): Promise<IndustryBoardConstituent[]> {
  return wrap(() => sdk.getIndustryConstituents(symbol), `行业成分股 ${symbol}`)
}

// ========== 概念板块 ==========

export function getConceptBoards(): Promise<ConceptBoard[]> {
  return wrap(() => sdk.getConceptList(), '概念板块列表')
}

export function getConceptConstituents(symbol: string): Promise<ConceptBoardConstituent[]> {
  return wrap(() => sdk.getConceptConstituents(symbol), `概念成分股 ${symbol}`)
}
