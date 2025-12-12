export interface WifiNode {
  id: string;
  node_id: number;
  owner_address: string;
  location: string;
  price_per_hour_eth: number;
  price_per_hour_usd: number;
  reputation_score: number;
  total_connections: number;
  is_active: boolean;
  upvotes: number;
  downvotes: number;
  registered_at: string;
  last_synced_at: string;
  created_at: string;
  updated_at: string;
}

const STORAGE_KEY = 'desert_wifi_nodes';
const MOCK_NODES_KEY = 'desert_wifi_mock_initialized';
const DATA_VERSION = '2.0';

function getMockNodes(): WifiNode[] {
  const now = new Date().toISOString();

  return [
    {
      id: '1',
      node_id: 1,
      owner_address: '0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb',
      location: 'Nairobi CBD, Kenya',
      price_per_hour_eth: 0.0008,
      price_per_hour_usd: 2.0,
      reputation_score: 96,
      total_connections: 1543,
      is_active: true,
      upvotes: 289,
      downvotes: 12,
      registered_at: now,
      last_synced_at: now,
      created_at: now,
      updated_at: now,
    },
    {
      id: '2',
      node_id: 2,
      owner_address: '0x8ba1f109551bD432803012645Ac136ddd64DBA72',
      location: 'Westlands, Nairobi, Kenya',
      price_per_hour_eth: 0.001,
      price_per_hour_usd: 2.5,
      reputation_score: 94,
      total_connections: 1187,
      is_active: true,
      upvotes: 234,
      downvotes: 15,
      registered_at: now,
      last_synced_at: now,
      created_at: now,
      updated_at: now,
    },
    {
      id: '3',
      node_id: 3,
      owner_address: '0x8ba1f109551bD432803012645Ac136ddd64DBA72',
      location: 'Parklands, Nairobi, Kenya',
      price_per_hour_eth: 0.001,
      price_per_hour_usd: 1.5,
      reputation_score: 90,
      total_connections: 1187,
      is_active: true,
      upvotes: 204,
      downvotes: 25,
      registered_at: now,
      last_synced_at: now,
      created_at: now,
      updated_at: now,
    },
  ];
}

function initializeMockData() {
  const storedVersion = localStorage.getItem(MOCK_NODES_KEY);

  if (storedVersion !== DATA_VERSION) {
    localStorage.removeItem(STORAGE_KEY);
    localStorage.removeItem(MOCK_NODES_KEY);

    const mockNodes = getMockNodes();
    localStorage.setItem(STORAGE_KEY, JSON.stringify(mockNodes));
    localStorage.setItem(MOCK_NODES_KEY, DATA_VERSION);
  }
}

export function getAllNodesFromStorage(): WifiNode[] {
  initializeMockData();

  const data = localStorage.getItem(STORAGE_KEY);
  if (!data) return [];

  try {
    return JSON.parse(data);
  } catch (error) {
    console.error('Error parsing nodes from localStorage:', error);
    return [];
  }
}

export function saveNodesToStorage(nodes: WifiNode[]): void {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(nodes));
}

export function addNodeToStorage(node: WifiNode): void {
  const nodes = getAllNodesFromStorage();
  nodes.push(node);
  saveNodesToStorage(nodes);
}

export function updateNodeInStorage(nodeId: number, updates: Partial<WifiNode>): void {
  const nodes = getAllNodesFromStorage();
  const index = nodes.findIndex(n => n.node_id === nodeId);

  if (index !== -1) {
    nodes[index] = { ...nodes[index], ...updates, updated_at: new Date().toISOString() };
    saveNodesToStorage(nodes);
  }
}

export function deleteNodeFromStorage(nodeId: number): void {
  const nodes = getAllNodesFromStorage();
  const filtered = nodes.filter(n => n.node_id !== nodeId);
  saveNodesToStorage(filtered);
}

export function clearAllNodes(): void {
  localStorage.removeItem(STORAGE_KEY);
  localStorage.removeItem(MOCK_NODES_KEY);
}
