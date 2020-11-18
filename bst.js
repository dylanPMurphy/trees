class BTNode {
    constructor(value){
        this.val = value;
        this.count = 1;
        this.left = null;
        this.right = null;
    }
    
    increaseCount(){
        this.count++;
        return this;
    }
}
class BST {
    constructor(){
        this.root = null;
    }
    
    
    add(val){
        var newNode = new BTNode(val)
        if(root == null){
            this.root  = newNode;
            return this;
        }
        var runner = this.root;
        while (runner != null){
            if (runner.val > val){
                if(runner.left ==null){
                    runner.left = newNode;
                    return this;
                }
                else{
                    runner = runner.left;
                }
            }
            else if(runner.val == val){
                runner.count++;
                return this;
            }
            else{
                if(runner.right == null){
                    runner.right = newNode;
                    return this;
                }
                else{
                    runner = runner.right;
                }
                
            }
        }        

    }
    // function contains(val){
        
    // }
    // function min(){
        
    // }
    // function max(){
        
    // }
    // function size(){
        
    // }
    // function isEmpty()

}


var bst1 = new BST();
bst1.add(123);
bst1.add(1234);
bst1.add(23);
bst1.add(1);
console.log(bst1);