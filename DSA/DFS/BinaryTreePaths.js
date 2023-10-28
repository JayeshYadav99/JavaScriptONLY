/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

// Function to find all root-to-leaf paths in a binary tree
var binaryTreePaths = function(root) {
    // Initialize an array to store all paths
    let allPaths = [];

    // Recursive function to find paths
    function findPaths(node, path = []) {
        // If the node is a leaf node, add the path to allPaths
        if (!node.left && !node.right) {
            allPaths.push([...path, node.val]);
            return;
        }

        // If the left child exists, recursively find paths for the left subtree
        if (node.left) {
            findPaths(node.left, [...path, node.val]);
        }

        // If the right child exists, recursively find paths for the right subtree
        if (node.right) {
            findPaths(node.right, [...path, node.val]);
        }
    }

    // Check if the root exists before calling the recursive function
    if (root) {
        findPaths(root);
    }

    // Map all paths to a string format
    return allPaths.map((path) => path.join('->'));
};
