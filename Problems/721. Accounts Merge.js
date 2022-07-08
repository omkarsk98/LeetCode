// https://leetcode.com/problems/accounts-merge/

/**
 * @param {string[][]} accounts
 * @return {string[][]}
 */
var accountsMerge = function (accounts) {
  console.log("--------------------------------------------------------------------");
  // console.log("Original:", accounts);
  // store email id and earliest index of the person
  const emailsCache = {};
  for (let acc in accounts) {
    let [name, ...emails] = accounts[acc];
    for(let email of emails) {
      if(!emailsCache[email]){
        // if email is not present in the cache, add it with the name and index of the account
        emailsCache[email] = {name, acc};
      }
      else{
        // duplicate email found. check if name matches and add all the emails to the same account
        const originalAccount = emailsCache[email];
        if(name === originalAccount.name){
          console.log("The name matches");
          // copy all the emails to the same account
          const prevAccount = originalAccount.acc;
          for(let newEmail of emails){
            emailsCache[newEmail] = {name: originalAccount.name, acc: prevAccount};
          }
          accounts[prevAccount].push(...emails);
          accounts[acc].length = 1;
          // console.log("Changed accounts:", accounts);
          // console.log("Updated cache:", emailsCache);
          break;
        }
      }
    }
  }
  accounts = accounts.filter(acc => acc.length > 1);
  for(let acc in accounts){
    accounts[acc] = [accounts[acc][0]].concat([...new Set(accounts[acc].slice(1))].sort());
  }
  return accounts;
};

const accountsMerge2 = function (accounts) {
  const roots = new Set()
  const owner = {}
  const parent = {}
  const children = {}

  for (let account of accounts) {
    let [user, root, ...emails] = account
    let r1 = find(root)
    owner[root] = user
    children[r1] = children[r1] || [root]
    roots.add(r1)

    for (let email of emails) {
      let r2 = find(email)
      if (r2 !== r1) {
        parent[r2] = r1
        children[r1].push(...(children[r2] ? children[r2] : [email]))
        roots.delete(r2)
        delete children[r2]
      }
    }
  }

  return [...roots].map((r) => [owner[r], ...children[r].sort()])

  function find(a) {
    parent[a] = parent[a] || a
    return a === parent[a] ? a : find(parent[a])
  }
}

const testCases = [
  // [["John", "johnsmith@mail.com", "john_newyork@mail.com"], ["John", "johnsmith@mail.com", "john00@mail.com"], ["Mary", "mary@mail.com"], ["John", "johnnybravo@mail.com"]],
  [["Gabe", "Gabe0@m.co", "Gabe3@m.co", "Gabe1@m.co"], ["Kevin", "Kevin3@m.co", "Kevin5@m.co", "Kevin0@m.co"], ["Ethan", "Ethan5@m.co", "Ethan4@m.co", "Ethan0@m.co"], ["Hanzo", "Hanzo3@m.co", "Hanzo1@m.co", "Hanzo0@m.co"], ["Fern", "Fern5@m.co", "Fern1@m.co", "Fern0@m.co"]],
  // [["David", "David0@m.co", "David4@m.co", "David3@m.co"], ["David", "David5@m.co", "David5@m.co", "David0@m.co"], ["David", "David1@m.co", "David4@m.co", "David0@m.co"], ["David", "David0@m.co", "David1@m.co", "David3@m.co"], ["David", "David4@m.co", "David1@m.co", "David3@m.co"]]
]
for(let test of testCases){
  console.log(accountsMerge(test));
  console.log(accountsMerge2(test));
}

/* 
  [["John","johnsmith@mail.com","john_newyork@mail.com"],["John","johnsmith@mail.com","john00@mail.com"],["Mary","mary@mail.com"],["John","johnnybravo@mail.com"]]
  [["Gabe","Gabe0@m.co","Gabe3@m.co","Gabe1@m.co"],["Kevin","Kevin3@m.co","Kevin5@m.co","Kevin0@m.co"],["Ethan","Ethan5@m.co","Ethan4@m.co","Ethan0@m.co"],["Hanzo","Hanzo3@m.co","Hanzo1@m.co","Hanzo0@m.co"],["Fern","Fern5@m.co","Fern1@m.co","Fern0@m.co"]]
  [["Alex","Alex5@m.co","Alex4@m.co","Alex0@m.co"],["Ethan","Ethan3@m.co","Ethan3@m.co","Ethan0@m.co"],["Kevin","Kevin4@m.co","Kevin2@m.co","Kevin2@m.co"],["Gabe","Gabe0@m.co","Gabe3@m.co","Gabe2@m.co"],["Gabe","Gabe3@m.co","Gabe4@m.co","Gabe2@m.co"]]
*/