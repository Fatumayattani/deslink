import { WifiNode, getAllNodesFromStorage } from '../lib/localStorage';

export interface NodeFilters {
  searchQuery?: string;
  minPriceETH?: number;
  maxPriceETH?: number;
  minPriceUSD?: number;
  maxPriceUSD?: number;
  minReputation?: number;
  activeOnly?: boolean;
}

export type SortOption =
  | 'price_eth_asc'
  | 'price_eth_desc'
  | 'price_usd_asc'
  | 'price_usd_desc'
  | 'reputation_desc'
  | 'connections_desc'
  | 'newest';

function sortNodes(nodes: WifiNode[], sortBy: SortOption): WifiNode[] {
  const sorted = [...nodes];

  switch (sortBy) {
    case 'price_eth_asc':
      return sorted.sort((a, b) => a.price_per_hour_eth - b.price_per_hour_eth);
    case 'price_eth_desc':
      return sorted.sort((a, b) => b.price_per_hour_eth - a.price_per_hour_eth);
    case 'price_usd_asc':
      return sorted.sort((a, b) => a.price_per_hour_usd - b.price_per_hour_usd);
    case 'price_usd_desc':
      return sorted.sort((a, b) => b.price_per_hour_usd - a.price_per_hour_usd);
    case 'reputation_desc':
      return sorted.sort((a, b) => b.reputation_score - a.reputation_score);
    case 'connections_desc':
      return sorted.sort((a, b) => b.total_connections - a.total_connections);
    case 'newest':
      return sorted.sort((a, b) => new Date(b.registered_at).getTime() - new Date(a.registered_at).getTime());
    default:
      return sorted.sort((a, b) => b.reputation_score - a.reputation_score);
  }
}

function filterNodes(nodes: WifiNode[], filters: NodeFilters): WifiNode[] {
  return nodes.filter(node => {
    if (filters.activeOnly && !node.is_active) {
      return false;
    }

    if (filters.searchQuery && !node.location.toLowerCase().includes(filters.searchQuery.toLowerCase())) {
      return false;
    }

    if (filters.minPriceETH !== undefined && node.price_per_hour_eth < filters.minPriceETH) {
      return false;
    }

    if (filters.maxPriceETH !== undefined && node.price_per_hour_eth > filters.maxPriceETH) {
      return false;
    }

    if (filters.minPriceUSD !== undefined && node.price_per_hour_usd < filters.minPriceUSD) {
      return false;
    }

    if (filters.maxPriceUSD !== undefined && node.price_per_hour_usd > filters.maxPriceUSD) {
      return false;
    }

    if (filters.minReputation !== undefined && node.reputation_score < filters.minReputation) {
      return false;
    }

    return true;
  });
}

export async function getAllNodes(): Promise<WifiNode[]> {
  const nodes = getAllNodesFromStorage();
  return sortNodes(nodes, 'reputation_desc');
}

export async function getActiveNodes(): Promise<WifiNode[]> {
  const nodes = getAllNodesFromStorage();
  const activeNodes = nodes.filter(node => node.is_active);
  return sortNodes(activeNodes, 'reputation_desc');
}

export async function getNodeById(nodeId: number): Promise<WifiNode | null> {
  const nodes = getAllNodesFromStorage();
  return nodes.find(node => node.node_id === nodeId) || null;
}

export async function searchNodes(
  filters: NodeFilters = {},
  sortBy: SortOption = 'reputation_desc'
): Promise<WifiNode[]> {
  const nodes = getAllNodesFromStorage();
  const filtered = filterNodes(nodes, filters);
  return sortNodes(filtered, sortBy);
}

export async function getSyncStatus() {
  return {
    last_synced_at: new Date().toISOString(),
    total_nodes: getAllNodesFromStorage().length,
  };
}
