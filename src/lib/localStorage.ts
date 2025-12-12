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

function getMockNodes(): WifiNode[] {
  const now = new Date().toISOString();

  return [
    {
      id: '1',
      node_id: 1,
      owner_address: '0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb',
      location: 'Downtown Phoenix, AZ',
      price_per_hour_eth: 0.001,
      price_per_hour_usd: 2.5,
      reputation_score: 98,
      total_connections: 1247,
      is_active: true,
      upvotes: 234,
      downvotes: 5,
      registered_at: now,
      last_synced_at: now,
      created_at: now,
      updated_at: now,
    },
    {
      id: '2',
      node_id: 2,
      owner_address: '0x8ba1f109551bD432803012645Ac136ddd64DBA72',
      location: 'Scottsdale Mall, AZ',
      price_per_hour_eth: 0.0008,
      price_per_hour_usd: 2.0,
      reputation_score: 95,
      total_connections: 892,
      is_active: true,
      upvotes: 178,
      downvotes: 9,
      registered_at: now,
      last_synced_at: now,
      created_at: now,
      updated_at: now,
    },
    {
      id: '3',
      node_id: 3,
      owner_address: '0xdD2FD4581271e230360230F9337D5c0430Bf44C0',
      location: 'Tempe Beach Park, AZ',
      price_per_hour_eth: 0.0012,
      price_per_hour_usd: 3.0,
      reputation_score: 92,
      total_connections: 654,
      is_active: true,
      upvotes: 145,
      downvotes: 12,
      registered_at: now,
      last_synced_at: now,
      created_at: now,
      updated_at: now,
    },
    {
      id: '4',
      node_id: 4,
      owner_address: '0xBcd4042DE499D14e55001CcbB24a551F3b954096',
      location: 'Mesa Community Center, AZ',
      price_per_hour_eth: 0.0009,
      price_per_hour_usd: 2.25,
      reputation_score: 88,
      total_connections: 421,
      is_active: true,
      upvotes: 98,
      downvotes: 14,
      registered_at: now,
      last_synced_at: now,
      created_at: now,
      updated_at: now,
    },
    {
      id: '5',
      node_id: 5,
      owner_address: '0x71C7656EC7ab88b098defB751B7401B5f6d8976F',
      location: 'Chandler Fashion Center, AZ',
      price_per_hour_eth: 0.0015,
      price_per_hour_usd: 3.75,
      reputation_score: 85,
      total_connections: 312,
      is_active: false,
      upvotes: 67,
      downvotes: 8,
      registered_at: now,
      last_synced_at: now,
      created_at: now,
      updated_at: now,
    },
  ];
}

function initializeMockData() {
  const isInitialized = localStorage.getItem(MOCK_NODES_KEY);

  if (!isInitialized) {
    const mockNodes = getMockNodes();
    localStorage.setItem(STORAGE_KEY, JSON.stringify(mockNodes));
    localStorage.setItem(MOCK_NODES_KEY, 'true');
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
