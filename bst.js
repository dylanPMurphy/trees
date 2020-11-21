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
        var newNode = new BTNode(val);
        if(this.root == null){
            this.root  = newNode;
            
            return this;
        }
        else{
            var runner = this.root;
            while (runner != null){
                if(runner.val == val){
                    runner.count++;
                    return this;
                }
                else{
                    if (runner.val > val){
                        if(runner.left == null){
                            runner.left = newNode;
                            return this;
                        }
                        else{
                            runner = runner.left;
                        }
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
        }

    }
    contains(val){
        var runner = this.root;
        while(runner != null){
            
            if(runner.val == val){
                return true;
            }
            else if (runner.val > val){
                runner = runner.left;
            }
            else{
                runner = runner.right;
            }
        }
        return false;
    }
    min(){
        if(this.root == null){
            return null;
        }
        else{
            var runner = this.root;
            while(runner != null){
                if(runner.left == null){
                    return runner.val;
                }
                else{
                    runner = runner.left;
                }
                
            }
        }
    }
    max(){
        if(this.root == null){
            return null;
        }
        else{
            var runner = this.root;
            while(runner != null){
                if(runner.right == null){
                    return runner.val;
                }
                else{
                    runner = runner.right;
                }
                
            }
        }
    }
    // function size(){
        
    // }
    // function isEmpty()

}


var bst1 = new BST();
bst1.add(1123999994);

bst1.add(123);
bst1.add(1234);
bst1.add(123);
bst1.add(12234);
bst1.add(12333);
bst1.add(11234);
bst1.add(99994);
bst1.add(1);


console.log(bst1);
console.log(bst1.contains(123));
console.log(bst1.contains(112341214));
console.log(bst1.min())
console.log(bst1.max())

