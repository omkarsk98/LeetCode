// start processing both the arrays from the end
// add the greatest elements at the end
class Solution
{
public:
    void merge(vector<int> &nums1, int m, vector<int> &nums2, int n)
    {
        int k = m + n - 1, i = m - 1, j = n - 1;
        while (i >= 0 && j >= 0) {
            if (nums1[i] > nums2[j])
                nums1[k--] = nums1[i--];
            else
                nums1[k--] = nums2[j--];
        }
        // if nums1 ends completely, below loop will process nums2
        // if nums2 ends completely, nums1 will already be at the required place already
        while (j >= 0)
            nums1[k--] = nums2[j--];
    }
};